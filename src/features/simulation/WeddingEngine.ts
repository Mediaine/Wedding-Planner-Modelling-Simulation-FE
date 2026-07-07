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

    // ===== Guest =====

    const attendance =
      GuestEngine.attendance(
        scenario.guest.invitation
      );

    const foodCost =
      GuestEngine.foodCost(
        attendance,
        45000,
      );

    // ===== Venue =====

    const venueCost =
      VenueEngine.calculate(
        scenario.venue.estimatedCost
      );

    // ===== Vendor =====

    const vendorCost =
      VendorEngine.calculate(
        scenario.vendor.selectedPackages
      );

    // ===== Tradition =====

    const traditionCost =
      scenario.tradition.mahar +
      scenario.tradition.seserahan;

    // ===== Total =====

    const totalCost =
      foodCost +
      venueCost +
      vendorCost +
      traditionCost;

    const remainingBudget =
      BudgetEngine.remaining(
        scenario.basic.budget,
        totalCost
      );

    const budgetUsage =
      BudgetEngine.percentage(
        scenario.basic.budget,
        totalCost
      );
    
    let status:
        "SAFE"
        |
        "WARNING"
        |
        "OVER_BUDGET";

        if(remainingBudget<0){

            status="OVER_BUDGET";

        }
        else if(budgetUsage>=90){

            status="WARNING";

        }
        else{

            status="SAFE";

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