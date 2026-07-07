import type { WeddingScenario } from "@/types/scenario";
import type { WeddingCalculation } from "@/types/wedding-engine";

import { BudgetEngine } from "./BudgetEngine";
import { GuestEngine } from "./GuestEngine";
import { VenueEngine } from "./VenueEngine";
import { VendorEngine } from "./VendorEngine";

export class WeddingEngine {

  static calculate(
    scenario: WeddingScenario,
  ): WeddingCalculation {

    const attendance =
      GuestEngine.calculateAttendance(
        scenario.guest.invitation,
      );

    const foodCost =
      GuestEngine.calculateFoodCost(
        attendance,
      );

    const venueCost =
      VenueEngine.calculate(
        scenario.venue.estimatedCost,
      );

    const vendorCost =
      VendorEngine.calculate(
        scenario.vendor.selectedPackages,
      );

    const traditionCost =
      scenario.tradition.mahar +
      scenario.tradition.seserahan;

    const totalCost =
      foodCost +
      venueCost +
      vendorCost +
      traditionCost;

    const remainingBudget =
      BudgetEngine.calculateRemaining(
        scenario.basic.budget,
        totalCost,
      );

    const budgetUsage =
      BudgetEngine.calculateUsage(
        scenario.basic.budget,
        totalCost,
      );

    let status:
      | "SAFE"
      | "WARNING"
      | "OVER_BUDGET";

    if (remainingBudget < 0) {
      status = "OVER_BUDGET";
    } else if (budgetUsage >= 90) {
      status = "WARNING";
    } else {
      status = "SAFE";
    }

    return {
      budget: scenario.basic.budget,

      foodCost,

      venueCost,

      vendorCost,

      traditionCost,

      totalCost,

      remainingBudget,

      budgetUsage,

      status,
    };
  }
}