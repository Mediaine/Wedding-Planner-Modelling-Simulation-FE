import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { useBuilderStore } from "@/stores/builder.store";
import { traditionPackages } from "./tradition.data";

export default function TraditionPackage() {

    const {
        scenario,
        updateTradition,
    } = useBuilderStore();

    return (

        <div className="space-y-4">

            <div>

                <h3 className="font-semibold">

                    Traditional Package

                </h3>

                <p className="text-sm text-muted-foreground">

                    Select your traditional wedding package

                </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

                {

                    traditionPackages.map((item) => {

                        const active =
                            scenario.tradition.traditionType === item.name;

                        return (

                            <Card

                                key={item.id}

                                className={`
                                    rounded-2xl
                                    border
                                    p-6
                                    text-left
                                    transition-all
                                    ${active
                                        ?
                                        "border-primary bg-primary/5 shadow"
                                        :
                                        "hover:border-primary"
                                }`} 

                                onClick={() =>
                                    updateTradition({
                                        traditionType: item.name,
                                        packagePrice: item.price,
                                    })

                                }

                            >

                                <CardContent className="space-y-2 py-5">

                                    <h4 className="font-semibold">

                                        {item.name}

                                    </h4>

                                    <p className="text-sm text-muted-foreground">

                                        {item.description}

                                    </p>

                                    <p className="font-bold">

                                        Rp {item.price.toLocaleString("id-ID")}

                                    </p>

                                </CardContent>

                            </Card>

                        );

                    })

                }

            </div>

        </div>

    );

}