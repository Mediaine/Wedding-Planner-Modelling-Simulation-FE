import type { BudgetAllocation } from "./budget-allocation";
import type { ConstraintResult } from "./constraint";
import type { Recommendation } from "./recommendation";
import type { ReviewValidation } from "./review-validation";
import type { WeddingInsight } from "./wedding-insight";
import type { WeddingCalculation } from "./wedding-engine";
import type { WeddingHealth } from "./wedding-health";

export interface OptimizationSuggestion {

    title: string;

    description: string;

    estimatedSaving: number;

}

export interface ScenarioResult {

    /**
     * Review Validation
     */
    validation: ReviewValidation;

    /**
     * Business Constraint Validation
     */
    constraint: ConstraintResult;

    /**
     * Wedding Calculation
     */
    calculation: WeddingCalculation;

    /**
     * Wedding Health
     */
    health: WeddingHealth;

    /**
     * Budget Allocation
     */
    allocation: BudgetAllocation;

    /**
     * Recommendation
     */
    recommendations: Recommendation[];

    /**
     * AI Insight
     */
    insights: WeddingInsight[];

    /**
     * Optimization
     */
    optimizations: OptimizationSuggestion[];

    /**
     * Generated Time
     */
    generatedAt: Date;

}