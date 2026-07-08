import EmptyResult from "./components/EmptyResult";
import ResultHeader from "./components/ResultHeader";
import ConstraintPanel from "./components/ConstraintPanel";
import BudgetSummaryPanel from "./components/BudgetSummaryPanel";
import WeddingHealthPanel from "./components/WeddingHealthPanel";
import BudgetAllocationPanel from "./components/BudgetAllocationPanel";
import RecommendationPanel from "./components/RecommendationPanel";
import InsightPanel from "./components/InsightPanel";

import { useScenarioResultStore } from "@/stores/scenario-result.store";

export default function ScenarioResultPage() {

    const { result } =
        useScenarioResultStore();

    if (!result) {
        return <EmptyResult />;
    }

    return (

        <div className="container mx-auto max-w-7xl space-y-6 py-8">

            <ResultHeader
                generatedAt={result.generatedAt}
            />

            <div className="grid gap-6 lg:grid-cols-3">

                {/* LEFT */}

                <div className="space-y-6 lg:col-span-2">

                    <ConstraintPanel
                        constraint={result.constraint}
                    />

                    <BudgetSummaryPanel
                        calculation={result.calculation}
                    />

                    <BudgetAllocationPanel
                        allocation={result.allocation}
                    />

                </div>

                {/* RIGHT */}

                <div className="space-y-6">

                    <WeddingHealthPanel
                        health={result.health}
                    />

                    <RecommendationPanel
                        recommendations={
                            result.recommendations
                        }
                    />

                    <InsightPanel
                        insights={result.insights}
                    />

                </div>

            </div>

        </div>

    );

}