import type { WeddingScenario } from "@/types/scenario";
import type { WeddingCalculation } from "@/types/wedding-engine";

import { BudgetEngine } from "../budget/BudgetEngine";
import { GuestEngine } from "../guest/GuestEngine";
import { VenueEngine } from "../venue/VenueEngine";
import { VendorEngine } from "../vendor/VendorEngine";

export class WeddingEngine {

    static calculate(
        scenario: WeddingScenario,
    ): WeddingCalculation {

        /**
         * ===============================
         * Guest
         * ===============================
         */

        const attendance =
            scenario.guest.estimatedAttendance > 0
                ? scenario.guest.estimatedAttendance
                : GuestEngine.calculateAttendance(
                      scenario.guest.invitation,
                  );

        const foodCost =
            GuestEngine.calculateFoodCost(
                attendance,
                scenario.guest.mealPrice,
            );

        /**
         * ===============================
         * Venue
         * ===============================
         */

        const venueCost =
            VenueEngine.calculate(
                scenario.venue.estimatedCost,
            );

        /**
         * ===============================
         * Vendor
         * ===============================
         */

        const vendorCost =
            VendorEngine.calculate(
                scenario.vendor.selectedPackages,
            );

        /**
         * ===============================
         * Tradition
         * ===============================
         */

        const traditionCost =
            scenario.tradition.mahar +
            scenario.tradition.seserahan;

        /**
         * ===============================
         * Total Cost
         * ===============================
         */

        const totalCost =
            foodCost +
            venueCost +
            vendorCost +
            traditionCost;

        /**
         * ===============================
         * Budget
         * ===============================
         */

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

        /**
         * ===============================
         * Return
         * ===============================
         */

        return {

            budget: scenario.basic.budget,

            foodCost,

            venueCost,

            vendorCost,

            traditionCost,

            totalCost,

            remainingBudget,

            budgetUsage,

        };

    }

}