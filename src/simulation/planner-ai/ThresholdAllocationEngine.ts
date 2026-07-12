import type {
  AllocationBreakdown,
  BudgetGrade,
  ThresholdAllocation,
} from "@/types/smart-planner";

import { thresholdAllocationConfig } from "@/config/threshold-allocation.config";

/**
 * ============================================================
 * Threshold Allocation Engine (Sprint 18, Step 5)
 * ============================================================
 *
 * Resolves the recommended budget split for a grade and turns
 * the configured percentages into concrete IDR amounts.
 *
 * The allocation is a recommendation only — later engines
 * (Package Selection / Fallback) may reallocate when a category
 * cannot be satisfied.
 */
export class ThresholdAllocationEngine {

  static resolve(
    grade: BudgetGrade,
    budget: number,
  ): ThresholdAllocation {

    const percentages =
      thresholdAllocationConfig[grade];

    const safeBudget =
      Number.isFinite(budget) && budget > 0
        ? budget
        : 0;

    const amounts: AllocationBreakdown = {

      food:
        ThresholdAllocationEngine.amountOf(
          safeBudget,
          percentages.food,
        ),

      venue:
        ThresholdAllocationEngine.amountOf(
          safeBudget,
          percentages.venue,
        ),

      vendor:
        ThresholdAllocationEngine.amountOf(
          safeBudget,
          percentages.vendor,
        ),

      tradition:
        ThresholdAllocationEngine.amountOf(
          safeBudget,
          percentages.tradition,
        ),

    };

    return {
      grade,
      budget: safeBudget,
      percentages: { ...percentages },
      amounts,
    };

  }

  private static amountOf(
    budget: number,
    percent: number,
  ): number {

    return Math.round((budget * percent) / 100);

  }

}
