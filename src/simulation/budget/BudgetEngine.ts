export class BudgetEngine {

    static calculateRemaining(
        budget: number,
        totalCost: number,
    ): number {

        return budget - totalCost;

    }

    static calculateUsage(
        budget: number,
        totalCost: number,
    ): number {

        if (budget <= 0) {

            return 0;

        }

        return Math.min(
            100,
            Math.round(
                (totalCost / budget) * 100,
            ),
        );

    }

}