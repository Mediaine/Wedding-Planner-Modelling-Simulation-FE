// import SummaryHeader from "./summary/SummaryHeader";
// import BudgetOverview from "./summary/BudgetOverview";
// import BudgetAllocation from "./summary/BudgetAllocation";
// import RecommendationPanel from "./summary/RecommendationPanel";
// import RemainingBudget from "./summary/RemainingBudget";
// import LiveSummary from "./summary/LiveSummary";
// import WeddingInsightPanel from "./summary/WeddingInsightPanel";
// import FoodCostCard from "./summary/FoodCostCard";
// import TraditionCard from "./summary/TraditionCard";
import AppCard from "@/components/common/AppCard";
import CostOverview from "./summary/CostOverview";
import WeddingCostBreakdown from "./summary/WeddingCostBreakdown";
import { useBuilderStore } from "@/stores/builder.store";

import { SimulationSummaryService } from "@/services/SimulationSummaryService";

export default function SimulationSummary() {

  const {
    scenario,
  } = useBuilderStore();

  const summary =
    SimulationSummaryService.calculate(
      scenario,
    );

  return (

    <div className="sticky top-6">

      <AppCard>

        <div className="space-y-6">

          <CostOverview
            budget={summary.budget}
            estimatedCost={summary.estimatedCost}
            remainingBudget={summary.remainingBudget}
          />


          <WeddingCostBreakdown
            food={summary.foodCost}
            venue={summary.venueCost}
            vendor={summary.vendorCost}
            tradition={summary.traditionCost}
          />


          {/* <SummaryHeader
            score={summary.health.score}
            level={summary.health.level}
          />

          <LiveSummary
            budget={summary.budget}
            concept={summary.concept}
            style={summary.style}
            invitation={summary.invitation}
            attendance={summary.attendance}
            meal={summary.meal}
            seating={summary.seating}
            venue={summary.venue}
            vendorCount={summary.vendorCount}
          />

          <FoodCostCard
            attendance={summary.attendance}
            mealPrice={scenario.guest.mealPrice}
            foodCost={summary.foodCost}
          />

          <TraditionCard
            traditionType={summary.traditionType}
            packagePrice={summary.traditionPackage}
            mahar={summary.mahar}
            seserahan={summary.seserahan}
            total={summary.traditionCost}
          />

          <BudgetOverview
            budget={summary.budget}
            spent={summary.estimatedCost}
            remaining={summary.remainingBudget}
          />

          <RemainingBudget
            remaining={summary.remainingBudget}
          />

          <BudgetAllocation
            food={summary.health.foodPercentage}
            venue={summary.health.venuePercentage}
            vendor={summary.health.vendorPercentage}
            tradition={summary.health.traditionPercentage}
          />

          <RecommendationPanel
            items={summary.recommendations}
          />

          <WeddingInsightPanel
            items={summary.insights}
          /> */}

        </div>

      </AppCard>

    </div>

  )

}