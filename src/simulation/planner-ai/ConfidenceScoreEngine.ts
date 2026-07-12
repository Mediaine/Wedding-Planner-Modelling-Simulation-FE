import type { WeddingCalculation } from "@/types/wedding-engine";
import type { ConstraintResult } from "@/types/constraint";
import type { WeddingScenario } from "@/types/scenario";
import type {
  CategoryPriority,
  ConfidenceBreakdown,
  ConfidenceInput,
  ConfidenceLevel,
  ConfidenceScore,
  PriorityLevel,
  ThresholdAllocation,
} from "@/types/smart-planner";

import {
  confidenceLevelThresholds,
  confidenceWeights,
} from "@/config/confidence-weights.config";

/**
 * ============================================================
 * Confidence Score Engine (Sprint 18, Step 13)
 * ============================================================
 *
 * Computes a deterministic 0-100 confidence score describing how
 * well a generated plan satisfies the planning rules. The score
 * is a weighted blend of five criteria (all reused from existing
 * engine output — nothing is recomputed):
 *
 *   Budget Fit            30%
 *   Threshold Compliance  25%
 *   Priority Satisfaction 20%
 *   Constraint Validation 15%
 *   Wedding Health        10%
 *
 * No randomness — identical input always yields the same score.
 */
export class ConfidenceScoreEngine {

  static calculate(
    input: ConfidenceInput,
  ): ConfidenceScore {

    const budgetFit =
      ConfidenceScoreEngine.budgetFit(input.calculation);

    const thresholdCompliance =
      ConfidenceScoreEngine.thresholdCompliance(
        input.calculation,
        input.allocation,
      );

    const prioritySatisfaction =
      ConfidenceScoreEngine.prioritySatisfaction(
        input.scenario,
        input.priority,
      );

    const constraintValidation =
      ConfidenceScoreEngine.constraintValidation(input.constraint);

    const weddingHealth =
      ConfidenceScoreEngine.clamp(input.health.score);

    const breakdown: ConfidenceBreakdown = {
      budgetFit,
      thresholdCompliance,
      prioritySatisfaction,
      constraintValidation,
      weddingHealth,
    };

    const score = Math.round(
      budgetFit * confidenceWeights.budgetFit +
      thresholdCompliance * confidenceWeights.thresholdCompliance +
      prioritySatisfaction * confidenceWeights.prioritySatisfaction +
      constraintValidation * confidenceWeights.constraintValidation +
      weddingHealth * confidenceWeights.weddingHealth,
    );

    return {
      score,
      level: ConfidenceScoreEngine.resolveLevel(score),
      breakdown,
      reasons: ConfidenceScoreEngine.buildReasons(
        breakdown,
        input.calculation,
        input.constraint,
      ),
    };

  }

  /**
   * Budget Fit — full marks when the plan fits within budget,
   * penalised (2x) for the overage percentage otherwise.
   *
   * The overage is derived from remainingBudget, not budgetUsage,
   * because the reused BudgetEngine caps usage at 100%.
   */
  private static budgetFit(
    calculation: WeddingCalculation,
  ): number {

    if (calculation.remainingBudget >= 0) {
      return 100;
    }

    const overagePercent =
      ConfidenceScoreEngine.overagePercent(calculation);

    return ConfidenceScoreEngine.clamp(100 - overagePercent * 2);

  }

  private static overagePercent(
    calculation: WeddingCalculation,
  ): number {

    return (
      (Math.abs(calculation.remainingBudget) /
        Math.max(calculation.budget, 1)) *
      100
    );

  }

  /**
   * Threshold Compliance — how closely actual spend follows the
   * recommended allocation, averaged across categories.
   */
  private static thresholdCompliance(
    calculation: WeddingCalculation,
    allocation: ThresholdAllocation,
  ): number {

    const pairs: Array<[number, number]> = [
      [calculation.foodCost, allocation.amounts.food],
      [calculation.venueCost, allocation.amounts.venue],
      [calculation.vendorCost, allocation.amounts.vendor],
      [calculation.traditionCost, allocation.amounts.tradition],
    ];

    const total = pairs.reduce((sum, [actual, recommended]) => {

      const denom = Math.max(recommended, 1);

      const deviation = Math.abs(actual - recommended) / denom;

      return sum + Math.max(0, 1 - deviation);

    }, 0);

    return (total / pairs.length) * 100;

  }

  /**
   * Priority Satisfaction — funded categories score full; unfunded
   * ones are penalised according to how important they are
   * (Critical unfunded fails; Optional skipped is fine).
   */
  private static prioritySatisfaction(
    scenario: WeddingScenario,
    priority: CategoryPriority,
  ): number {

    const funded: Record<keyof CategoryPriority, boolean> = {
      Food: scenario.guest.mealPrice > 0,
      Venue: scenario.venue.estimatedCost > 0,
      Decoration: scenario.venue.decorationCost > 0,
      Vendor:
        Object.keys(scenario.vendor.selectedPackages).length > 0,
      Tradition: scenario.tradition.traditionType !== "",
    };

    const categories: Array<keyof CategoryPriority> = [
      "Food",
      "Venue",
      "Decoration",
      "Vendor",
      "Tradition",
    ];

    const total = categories.reduce((sum, category) => {
      return (
        sum +
        ConfidenceScoreEngine.categorySatisfaction(
          priority[category],
          funded[category],
        )
      );
    }, 0);

    return (total / categories.length) * 100;

  }

  private static categorySatisfaction(
    priority: PriorityLevel,
    funded: boolean,
  ): number {

    if (funded) {
      return 1;
    }

    switch (priority) {
      case "Critical":
        return 0;
      case "High":
        return 0.4;
      case "Medium":
        return 0.7;
      case "Optional":
        return 1;
      default:
        return 0.5;
    }

  }

  /**
   * Constraint Validation — proportion of business constraints
   * that pass (reused from the Constraint Engine output).
   */
  private static constraintValidation(
    constraint: ConstraintResult,
  ): number {

    const total = constraint.constraints.length || 1;

    const valid =
      constraint.constraints.filter((c) => c.valid).length;

    return (valid / total) * 100;

  }

  private static resolveLevel(
    score: number,
  ): ConfidenceLevel {

    if (score >= confidenceLevelThresholds.veryHigh) {
      return "Very High";
    }

    if (score >= confidenceLevelThresholds.high) {
      return "High";
    }

    if (score >= confidenceLevelThresholds.medium) {
      return "Medium";
    }

    return "Low";

  }

  private static buildReasons(
    breakdown: ConfidenceBreakdown,
    calculation: WeddingCalculation,
    constraint: ConstraintResult,
  ): string[] {

    const reasons: string[] = [];

    reasons.push(
      calculation.remainingBudget >= 0
        ? "Total biaya masih sesuai dengan anggaran."
        : `Rencana melebihi anggaran sebesar ${Math.round(ConfidenceScoreEngine.overagePercent(calculation))}%.`,
    );

    reasons.push(
      breakdown.thresholdCompliance >= 75
        ? "Pembagian biaya mengikuti alokasi yang direkomendasikan."
        : "Pembagian biaya menyimpang dari alokasi yang direkomendasikan.",
    );

    reasons.push(
      breakdown.prioritySatisfaction >= 90
        ? "Semua kategori penting sudah terpenuhi."
        : "Sebagian kategori dikurangi atau dilewati sesuai prioritas.",
    );

    const invalid =
      constraint.constraints.filter((c) => !c.valid).length;

    reasons.push(
      invalid === 0
        ? "Tidak ada aturan bisnis yang dilanggar."
        : `${invalid} pemeriksaan aturan belum terpenuhi.`,
    );

    reasons.push(
      `Skor kesehatan pernikahan: ${breakdown.weddingHealth}.`,
    );

    return reasons;

  }

  private static clamp(
    value: number,
  ): number {

    return Math.min(100, Math.max(0, value));

  }

}
