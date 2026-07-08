import { create } from "zustand";

import type { ScenarioResult } from "@/types/scenario-result";

interface ScenarioResultState {

    /**
     * Latest simulation result
     */
    result: ScenarioResult | null;

    /**
     * Save simulation result
     */
    setResult: (
        result: ScenarioResult,
    ) => void;

    /**
     * Remove current simulation result
     */
    clearResult: () => void;

}

export const useScenarioResultStore =
    create<ScenarioResultState>((set) => ({

        result: null,

        setResult: (result) =>

            set({

                result,

            }),

        clearResult: () =>

            set({

                result: null,

            }),

    }));