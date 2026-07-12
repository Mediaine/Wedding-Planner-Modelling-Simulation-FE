import type {
  BudgetGrade,
  BudgetGradeBand,
} from "@/types/smart-planner";

import { budgetGradeBands } from "@/config/budget-grade.config";

/**
 * ============================================================
 * Budget Grade Engine (Sprint 18, Step 2)
 * ============================================================
 *
 * Determines the wedding budget class from a (normalized)
 * budget amount using the configurable bands in
 * `budget-grade.config`. Pure, deterministic rule-based lookup —
 * no hard-coded thresholds live here.
 */
export class BudgetGradeEngine {

  /**
   * Resolve the full band a budget falls into. Falls back to the
   * top (open-ended) band for any out-of-range value.
   */
  static resolveBand(
    budget: number,
  ): BudgetGradeBand {

    const safeBudget =
      Number.isFinite(budget) && budget > 0
        ? budget
        : 0;

    const band =
      budgetGradeBands.find(
        (b) =>
          safeBudget >= b.minBudget &&
          safeBudget <= b.maxBudget,
      );

    return (
      band ??
      budgetGradeBands[budgetGradeBands.length - 1]
    );

  }

  /**
   * Classify a budget into its BudgetGrade.
   */
  static classify(
    budget: number,
  ): BudgetGrade {

    return BudgetGradeEngine.resolveBand(budget).grade;

  }

}
