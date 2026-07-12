import { create } from "zustand";

import type {
  GeneratedPlan,
  PlannerInput,
} from "@/types/smart-planner";

import { RequirementAnalyzer } from "@/simulation/planner-ai/RequirementAnalyzer";
import { PlanGeneratorEngine } from "@/simulation/planner-ai/PlanGeneratorEngine";

type PlannerStatus = "idle" | "ready";

interface SmartPlannerState {

  input: PlannerInput;

  plans: GeneratedPlan[];

  status: PlannerStatus;

  setInput: (data: Partial<PlannerInput>) => void;

  generate: () => void;

  reset: () => void;

}

const defaultInput: PlannerInput = {
  budget: 70000000,
  guestCount: 500,
  province: "",
  city: "",
  concept: "Hybrid",
  style: "Modern",
};

export const useSmartPlannerStore =
  create<SmartPlannerState>((set, get) => ({

    input: defaultInput,

    plans: [],

    status: "idle",

    setInput: (data) =>
      set((state) => ({
        input: {
          ...state.input,
          ...data,
        },
      })),

    generate: () => {

      const requirement =
        RequirementAnalyzer.analyze(get().input);

      const plans =
        PlanGeneratorEngine.generate(requirement);

      set({
        plans,
        status: "ready",
      });

    },

    reset: () =>
      set({
        plans: [],
        status: "idle",
      }),

  }));
