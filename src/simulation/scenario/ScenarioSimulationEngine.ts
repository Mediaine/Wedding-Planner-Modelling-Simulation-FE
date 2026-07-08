import type { WeddingScenario } from "@/types/scenario";
import type { ScenarioResult } from "@/types/scenario-result";

import { WeddingEngine } from "../core/WeddingEngine";

import { BudgetAllocationEngine } from "../budget/BudgetAllocationEngine";

import { WeddingHealthEngine } from "../analysis/WeddingHealthEngine";

import { RecommendationEngine } from "../analysis/RecommendationEngine";

import { WeddingInsightEngine } from "../analysis/WeddingInsightEngine";

import { ReviewValidationEngine } from "../../validation/ReviewValidationEngine";

import { ScenarioResultFactory } from "../../result/ScenarioResultFactory";

import { ConstraintEngine } from "../constraint/ConstraintEngine";

export class ScenarioSimulationEngine {

    static run(

        scenario: WeddingScenario,

    ): ScenarioResult {

        // ----------------------------
        // Review Validation
        // ----------------------------

        const validation =

            ReviewValidationEngine.validate(

                scenario,

            );

        if (!validation.ready) {

            throw new Error(

                "Scenario is not ready for simulation.",

            );

        }

        // ----------------------------
        // Constraint Engine
        // ----------------------------

        const constraint =
            ConstraintEngine.evaluate(
                scenario,
            );

        if (!constraint.passed) {

        throw new Error(
            "Scenario does not satisfy business constraints.",
        );

        }

        // ----------------------------
        // Wedding Calculation
        // ----------------------------

        const calculation =

            WeddingEngine.calculate(

                scenario,

            );

        // ----------------------------
        // Budget Allocation
        // ----------------------------

        const allocation =

            BudgetAllocationEngine.calculate(

                calculation,

            );

        // ----------------------------
        // Wedding Health
        // ----------------------------

        const health =

            WeddingHealthEngine.calculate(

                calculation,

            );

        // ----------------------------
        // Recommendation
        // ----------------------------

        const recommendations =

            RecommendationEngine.calculate(

                calculation,

            );

        // ----------------------------
        // Insight
        // ----------------------------

        const insights =

            WeddingInsightEngine.generate(

                calculation,

                scenario,

            );

        // ----------------------------
        // Result
        // ----------------------------

        return ScenarioResultFactory.create({
            constraint,
            calculation,
            validation,
            allocation,
            health,
            recommendations,
            insights,
        });

    }

}