export class VenueEngine {

    static calculate(
        estimatedCost: number,
        decorationCost: number = 0,
    ): number {

        const rental =
            Math.max(0, estimatedCost);

        const decoration =
            Math.max(0, decorationCost);

        return rental + decoration;

    }

}
