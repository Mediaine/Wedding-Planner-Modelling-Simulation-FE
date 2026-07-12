import type { BudgetGradeBand } from "@/types/smart-planner";

/**
 * ============================================================
 * Budget Grade Configuration (Sprint 18, Step 2)
 * ============================================================
 *
 * Single source of truth for wedding budget classes. Grades are
 * configured here — never hard-coded inside engines or
 * components — so bands can be tuned without touching logic.
 *
 * Bands are contiguous and inclusive on `maxBudget`. The top
 * band (LUXURY) is open-ended via Number.MAX_SAFE_INTEGER, the
 * same convention used by the existing planner presets.
 *
 * Amounts are in IDR.
 */
export const budgetGradeBands: BudgetGradeBand[] = [

  {
    grade: "ECONOMY",
    label: "Economy",
    minBudget: 0,
    maxBudget: 25000000,
  },

  {
    grade: "STANDARD",
    label: "Standard",
    minBudget: 25000001,
    maxBudget: 50000000,
  },

  {
    grade: "PLUS",
    label: "Plus",
    minBudget: 50000001,
    maxBudget: 75000000,
  },

  {
    grade: "PREMIUM",
    label: "Premium",
    minBudget: 75000001,
    maxBudget: 100000000,
  },

  {
    grade: "LUXURY",
    label: "Luxury",
    minBudget: 100000001,
    maxBudget: Number.MAX_SAFE_INTEGER,
  },

];
