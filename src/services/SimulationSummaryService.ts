import type { WeddingScenario } from "@/types/scenario";
import type { SimulationSummary } from "@/types/simulation-summary";

import { WeddingHealthEngine } from "@/simulation/analysis/WeddingHealthEngine";
import { RecommendationEngine } from "@/simulation/analysis/RecommendationEngine";
import { WeddingEngine } from "@/simulation/core/WeddingEngine";
import { BudgetAllocationEngine } from "@/simulation/budget/BudgetAllocationEngine";
import { WeddingInsightEngine } from "@/simulation/analysis/WeddingInsightEngine";

export class SimulationSummaryService {

  static calculate(
    scenario: WeddingScenario,
  ): SimulationSummary {

    const calculation =
      WeddingEngine.calculate(scenario);
    
    const health =
      WeddingHealthEngine.calculate(
      calculation
      );

    const recommendations =
      RecommendationEngine.calculate(
      calculation
    );

    const allocation =
      BudgetAllocationEngine.calculate(
        calculation,
      );

    const insights =
      WeddingInsightEngine.generate(
        calculation,
          scenario,
    );

    return {

      budget:
        calculation.budget,

      estimatedCost:
        calculation.totalCost,

      remainingBudget:
        calculation.remainingBudget,

      invitation:
        scenario.guest.invitation,

      attendance:
        scenario.guest.estimatedAttendance,

      meal:
        scenario.guest.meal,

      seating:
        scenario.guest.seating,

      concept:
        scenario.basic.concept,

      style:
        scenario.basic.style,

      vendorCount:
        Object.keys(
          scenario.vendor.selectedPackages,
        ).length,

      venue:
        scenario.venue.venueType || "-",
      
      foodCost: 
        calculation.foodCost,

      health,

      recommendations,

      allocation,

      insights,

      traditionType:
        scenario.tradition.traditionType,

      traditionPackage:
        scenario.tradition.packagePrice,

      mahar:
        scenario.tradition.mahar,

      seserahan:
        scenario.tradition.seserahan,

      traditionCost:
        calculation.traditionCost,
      
      venueCost:
        calculation.venueCost,

      decorationCost:
        scenario.venue.decorationCost,

      vendorCost:
        calculation.vendorCost,

    };

  }

}