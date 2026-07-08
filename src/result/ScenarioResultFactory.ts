import type { ScenarioResult } from "@/types/scenario-result";
import type { BudgetAllocation } from "@/types/budget-allocation";
import type { Recommendation } from "@/types/recommendation";
import type { WeddingCalculation } from "@/types/wedding-engine";
import type { WeddingHealth } from "@/types/wedding-health";
import type { ReviewValidation } from "@/types/review-validation";
import type { WeddingInsight } from "@/types/wedding-insight";
import type { ConstraintResult } from "@/types/constraint";

interface BuildParams {

    constraint: ConstraintResult;

    calculation: WeddingCalculation;

    validation: ReviewValidation;

    health: WeddingHealth;

    allocation: BudgetAllocation;

    recommendations: Recommendation[];

    insights: WeddingInsight[];

    optimizations?: {

        title: string;

        description: string;

        estimatedSaving: number;

    }[];

}

export class ScenarioResultFactory {

    static create(

        params: BuildParams,

    ): ScenarioResult {

        return {

            constraint:
                params.constraint,

            calculation:
                params.calculation,

            validation:
                params.validation,

            health:
                params.health,

            allocation:
                params.allocation,

            recommendations:
                params.recommendations,

            insights:
                params.insights,

            optimizations:
                params.optimizations ?? [],

            generatedAt:
                new Date(),

        };

    }

}