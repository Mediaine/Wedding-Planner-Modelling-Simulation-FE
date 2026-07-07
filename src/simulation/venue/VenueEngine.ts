export class VenueEngine {

    static calculate(
        estimatedCost: number,
    ): number {

        return Math.max(
            0,
            estimatedCost,
        );

    }

}

