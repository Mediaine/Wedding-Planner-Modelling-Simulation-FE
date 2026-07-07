import type { WeddingCalculation } from "@/types/wedding-engine";
import type { BudgetAllocation } from "@/types/budget-allocation";

export class BudgetAllocationEngine {

    static calculate(
        calculation: WeddingCalculation,
    ): BudgetAllocation {

        const budget = calculation.budget || 1;

        const food =
            Math.round(
                (calculation.foodCost / budget) * 100,
            );

        const venue =
            Math.round(
                (calculation.venueCost / budget) * 100,
            );

        const vendor =
            Math.round(
                (calculation.vendorCost / budget) * 100,
            );

        const tradition =
            Math.round(
                (calculation.traditionCost / budget) * 100,
            );

        const remaining =
            Math.max(
                0,
                100 -
                    food -
                    venue -
                    vendor -
                    tradition,
            );

        return {

            food,

            venue,

            vendor,

            tradition,

            remaining,

        };

    }

}