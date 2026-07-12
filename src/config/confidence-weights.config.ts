import type { ConfidenceWeights } from "@/types/smart-planner";

/**
 * ============================================================
 * Confidence Score Configuration (Sprint 18, Step 13)
 * ============================================================
 *
 * Weighted criteria for the confidence score and the level
 * thresholds. Configured here so scoring can be tuned without
 * touching engine logic. Weights sum to 1.
 */
export const confidenceWeights: ConfidenceWeights = {
  budgetFit: 0.3,
  thresholdCompliance: 0.25,
  prioritySatisfaction: 0.2,
  constraintValidation: 0.15,
  weddingHealth: 0.1,
};

/**
 * Lower bounds (inclusive) for each confidence level.
 * 95-100 Very High · 85-94 High · 70-84 Medium · below 70 Low.
 */
export const confidenceLevelThresholds = {
  veryHigh: 95,
  high: 85,
  medium: 70,
};
