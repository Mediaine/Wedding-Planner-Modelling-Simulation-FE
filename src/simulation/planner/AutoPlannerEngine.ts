import type { WeddingScenario } from "@/types/scenario";
import type { WeddingCalculation } from "@/types/wedding-engine";
import type { WeddingHealth } from "@/types/wedding-health";
import type { Recommendation } from "@/types/recommendation";

import { PlannerPresetEngine } from "./PlannerPresetEngine";
import { WeddingEngine } from "../core/WeddingEngine";
import { WeddingHealthEngine } from "../analysis/WeddingHealthEngine";
import { RecommendationEngine } from "@/simulation/analysis/RecommendationEngine";

export interface AutoPlannerResult {

  scenario: WeddingScenario;

  calculation: WeddingCalculation;

  health: WeddingHealth;

  recommendations: Recommendation[];

}

export class AutoPlannerEngine {

  static generate(
    scenario: WeddingScenario,
  ): AutoPlannerResult {

    const plannedScenario =
      PlannerPresetEngine.apply(
        scenario.basic.budget,
        scenario,
      );

    const calculation =
      WeddingEngine.calculate(
        plannedScenario,
      );

    const health =
      WeddingHealthEngine.calculate(
        calculation,
      );

    const recommendations =
      RecommendationEngine.calculate(
        calculation,
      );

    return {

      scenario: plannedScenario,

      calculation,

      health,

      recommendations,

    };

  }

}