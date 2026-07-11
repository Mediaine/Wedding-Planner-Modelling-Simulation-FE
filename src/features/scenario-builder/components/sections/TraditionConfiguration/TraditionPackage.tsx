import { Check, Landmark, Sparkles } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";
import { traditionPackages } from "./tradition.data";

export default function TraditionPackage() {

    const {
        scenario,
        updateTradition,
    } = useBuilderStore();

    const { traditionType, packagePrice } = scenario.tradition;

    return (

        <AppCard>

            <div className="mb-8">

                <h2 className="text-xl font-bold">
                    Traditional Package
                </h2>

                <p className="text-muted-foreground">
                    Select your traditional wedding package or enter a custom price.
                </p>

            </div>

            <div className="grid gap-5 lg:grid-cols-3">

                {traditionPackages.map((item) => {

                    const active = traditionType === item.name;

                    return (

                        <button
                            key={item.id}
                            onClick={() =>
                                updateTradition({
                                    traditionType: item.name,
                                    packagePrice: item.price,
                                })
                            }
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
                                }
`}

                        >

                            <div className="flex items-center justify-between">

                                <Landmark size={32} />

                                {active && <Check size={20} />}

                            </div>

                            <h3 className="mt-6 text-lg font-semibold">

                                {item.name}

                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">

                                {item.description}

                            </p>

                            <div className="mt-6 text-lg font-bold">

                                Rp {item.price.toLocaleString("id-ID")}

                            </div>

                        </button>

                    );

                })}

                <button
                    onClick={() =>
                        updateTradition({
                            traditionType: "Custom",
                        })
                    }
                    className={`
rounded-2xl
border
p-6
text-left
transition-all

${traditionType === "Custom"
                            ?
                            "border-primary bg-primary/5 shadow"
                            :
                            "hover:border-primary"
                        }
`}

                >

                    <div className="flex items-center justify-between">

                        <Sparkles size={32} />

                        {traditionType === "Custom" && <Check size={20} />}

                    </div>

                    <h3 className="mt-6 text-lg font-semibold">

                        Custom

                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">

                        Enter your own tradition package price

                    </p>

                    <div className="mt-6 text-lg font-bold">

                        Rp {packagePrice.toLocaleString("id-ID")}

                    </div>

                </button>

            </div>

            <div className="mt-8 space-y-3">

                <Label>
                    Custom Traditional Package Price
                </Label>

                <Input
                    type="number"
                    value={packagePrice}
                    onChange={(e) =>
                        updateTradition({
                            traditionType: "Custom",
                            packagePrice: Number(e.target.value),
                        })
                    }
                />

                <p className="text-xs text-muted-foreground">
                    Override package price if needed.
                </p>

            </div>

        </AppCard>

    );

}
