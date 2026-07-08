import EmptyResult from "../components/EmptyResult";
import ResultHeader from "../components/ResultHeader";
import ConstraintPanel from "../components/ConstraintPanel";
import BudgetSummaryPanel from "../components/BudgetSummaryPanel";
import WeddingHealthPanel from "../components/WeddingHealthPanel";
import BudgetAllocationPanel from "../components/BudgetAllocationPanel";
import RecommendationPanel from "../components/RecommendationPanel";
import InsightPanel from "../components/InsightPanel";

import { useScenarioResultStore } from "@/stores/scenario-result.store";

export default function ScenarioResultPage() {

  const {

    result,

  } = useScenarioResultStore();

  if (!result) {

    return <EmptyResult />;

  }

  return (

    <div className="space-y-6">

      <ResultHeader

        generatedAt={

          result.generatedAt

        }

      />

      <ConstraintPanel

        constraint={

          result.constraint

        }

      />

      <BudgetSummaryPanel

        calculation={

          result.calculation

        }

      />

      <WeddingHealthPanel

        health={

          result.health

        }

      />

      <BudgetAllocationPanel

        allocation={

          result.allocation

        }

      />

      <RecommendationPanel

        recommendations={

          result.recommendations

        }

      />

      <InsightPanel

        insights={

          result.insights

        }

      />

    </div>

  );

}