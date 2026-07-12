import type {
  AllocationBreakdown,
  BudgetGrade,
} from "@/types/smart-planner";

/**
 * ============================================================
 * Threshold Allocation Configuration (Sprint 18, Step 5)
 * ============================================================
 *
 * Recommended budget allocation (percent) per budget grade.
 * Configured here — never hard-coded in the engine — so the
 * planner's recommended splits can be tuned freely.
 *
 * Venue includes decoration (matches the Simulation Engine's
 * venue cost model and the spec's "Venue + Decoration" grouping).
 * Every grade sums to 100%.
 *
 * Threshold is a recommendation only; downstream engines may
 * reallocate when a category has no fitting package.
 */
export const thresholdAllocationConfig: Record<BudgetGrade, AllocationBreakdown> = {

  ECONOMY: {
    food: 55,
    venue: 20,
    vendor: 15,
    tradition: 10,
  },

  STANDARD: {
    food: 50,
    venue: 20,
    vendor: 20,
    tradition: 10,
  },

  PLUS: {
    food: 45,
    venue: 25,
    vendor: 20,
    tradition: 10,
  },

  PREMIUM: {
    food: 40,
    venue: 30,
    vendor: 20,
    tradition: 10,
  },

  LUXURY: {
    food: 35,
    venue: 35,
    vendor: 20,
    tradition: 10,
  },

};
