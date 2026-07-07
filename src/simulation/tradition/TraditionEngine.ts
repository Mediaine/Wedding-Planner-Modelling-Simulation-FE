import type { TraditionConfiguration } from "@/types/tradition";

export class TraditionEngine {

    static calculate(

        tradition: TraditionConfiguration,

    ): number {

        return (

            tradition.packagePrice +

            tradition.mahar +

            tradition.seserahan

        );

    }

}