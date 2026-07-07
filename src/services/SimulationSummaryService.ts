import type { WeddingScenario } from "@/types/scenario";
import type { SimulationSummary } from "@/types/simulation-summary";

import { WeddingHealthEngine } from "@/simulation/WeddingHealthEngine";
import { RecommendationEngine } from "@/simulation/RecommendationEngine";
import { WeddingEngine } from "@/simulation/WeddingEngine";

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

      status:
        calculation.status,
      
      health,

      recommendations,

    };

  }

}