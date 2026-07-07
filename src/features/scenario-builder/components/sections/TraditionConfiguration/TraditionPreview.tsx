import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { useBuilderStore } from "@/stores/builder.store";

function money(value: number) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0,

    }).format(value);

}

export default function TraditionPreview() {

    const { scenario } =
        useBuilderStore();

    const total =
        scenario.tradition.packagePrice +
        scenario.tradition.mahar +
        scenario.tradition.seserahan;

    return (

        <Card>

            <CardContent className="space-y-3 py-5">

                <h3 className="font-semibold">

                    Estimated Tradition Cost

                </h3>

                <div className="text-3xl font-bold">

                    {money(total)}

                </div>

                <div className="text-sm text-muted-foreground">

                    Package +

                    Mahar +

                    Seserahan

                </div>

            </CardContent>

        </Card>

    );

}