import type {
  GeneratedPlan,
  PlannerRequirement,
} from "@/types/smart-planner";

import { planObjectives } from "@/config/plan-objectives.config";

import { SmartPlannerPipeline } from "./SmartPlannerPipeline";

/**
 * ============================================================
 * Plan Generator (Sprint 18 — Multiple Plan Generation)
 * ============================================================
 *
 * Produces the labelled planning alternatives (Balanced, Budget
 * Saver, Premium Experience) by running the deterministic
 * pipeline once per objective, each targeting a different share
 * of the budget. Fully deterministic — no randomness.
 */
export class PlanGeneratorEngine {

  static generate(
    requirement: PlannerRequirement,
  ): GeneratedPlan[] {

    return planObjectives.map((objective) => {

      const planningBudget =
        Math.max(
          1,
          Math.round(requirement.budget * objective.budgetFactor),
        );

      const pipeline =
        SmartPlannerPipeline.run(requirement, planningBudget);

      return {
        ...pipeline,
        objective,
      };

    });

  }

}
