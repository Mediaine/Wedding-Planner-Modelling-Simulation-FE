import { create } from "zustand";
import { AutoPlannerEngine } from "@/simulation";
import type { WeddingScenario } from "@/types/scenario";

interface BuilderStore {
  currentStep: number;

  scenario: WeddingScenario;

  nextStep: () => void;

  previousStep: () => void;

  goToStep: (step: number) => void;

  autoPlan: () => void;

  updateBasic: (data: Partial<WeddingScenario["basic"]>) => void;

  updateGuest: (data: Partial<WeddingScenario["guest"]>) => void;

  updateVenue: (data: Partial<WeddingScenario["venue"]>) => void;

  updateVendor: (data: Partial<WeddingScenario["vendor"]>) => void;

  updateTradition: (data: Partial<WeddingScenario["tradition"]>) => void;
}

export const useBuilderStore = create<BuilderStore>((set) => ({
  currentStep: 1,

  scenario: {
    basic: {
      scenarioName: "",
      budget: 70000000,
      concept: "Hybrid",
      style: "Modern",
      weddingDate: "",
      province: "",
      city: "",
    },

    guest: {
      invitation: 500,
      estimatedAttendance: 1000,
      seating: "Seated",
      meal: "Dinner",
      mealPrice: 45000,
    },

    venue: {
      venueType: "",
      estimatedCost: 0,
      capacity: 0,
      location: "",
      facilities: [],
      decorationPackage: "",
      decorationCost: 0,
    },

    vendor: {
      selectedPackages: {},
    },

    tradition: {
      traditionType: "",
      packagePrice: 0,
      mahar: 10000000,
      seserahan: 5000000,
    },
  },

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 6),
    })),

  previousStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  goToStep: (step) =>
    set({
      currentStep: step,
    }),

  updateBasic: (data) =>
    set((state) => ({
      scenario: {
        ...state.scenario,
        basic: {
          ...state.scenario.basic,
          ...data,
        },
      },
    })),

  updateGuest: (data) =>
    set((state) => ({
      scenario: {
        ...state.scenario,
        guest: {
          ...state.scenario.guest,
          ...data,
        },
      },
    })),

  updateVenue: (data) =>
    set((state) => ({
      scenario: {
        ...state.scenario,
        venue: {
          ...state.scenario.venue,
          ...data,
        },
      },
    })),

  updateVendor: (data) =>
    set((state) => ({
      scenario: {
        ...state.scenario,
        vendor: {
          ...state.scenario.vendor,
          ...data,
        },
      },
    })),

  autoPlan: () =>
    set((state) => {
      const result = AutoPlannerEngine.generate(state.scenario);
      return {
        scenario: result.scenario,
      };
    }),

  updateTradition: (data) =>
    set((state) => ({
      scenario: {
        ...state.scenario,
        tradition: {
          ...state.scenario.tradition,
          ...data,
        },
      },
    })),

}));
