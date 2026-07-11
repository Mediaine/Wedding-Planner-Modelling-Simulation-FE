import type { TraditionConfiguration } from "@/types/tradition";

export class TraditionEngine {

    static calculate(

        tradition: TraditionConfiguration,

    ): number {

        return (

            Math.max(0, tradition.packagePrice) +

            Math.max(0, tradition.mahar) +

            Math.max(0, tradition.seserahan)

        );

    }

}
