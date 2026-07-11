import { Check, Gift, Sparkles } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";
import { seserahanPackages } from "./tradition.data";

export default function Seserahan() {

    const {
        scenario,
        updateTradition,
    } = useBuilderStore();

    const { seserahanPackage, seserahan } = scenario.tradition;

    return (

        <AppCard>

            <div className="mb-8">

                <h2 className="text-xl font-bold">
                    Seserahan
                </h2>

                <p className="text-muted-foreground">
                    Choose a seserahan package or enter a custom amount.
                </p>

            </div>

            <div className="grid gap-5 lg:grid-cols-3">

                {seserahanPackages.map((item) => {

                    const active = seserahanPackage === item.label;

                    return (

                        <button
                            key={item.id}
                            onClick={() =>
                                updateTradition({
                                    seserahanPackage: item.label,
                                    seserahan: item.price,
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

                                <Gift size={32} />

                                {active && <Check size={20} />}

                            </div>

                            <h3 className="mt-6 text-lg font-semibold">

                                {item.label}

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
                            seserahanPackage: "Custom",
                        })
                    }
                    className={`
rounded-2xl
border
p-6
text-left
transition-all

${seserahanPackage === "Custom"
                            ?
                            "border-primary bg-primary/5 shadow"
                            :
                            "hover:border-primary"
                        }
`}

                >

                    <div className="flex items-center justify-between">

                        <Sparkles size={32} />

                        {seserahanPackage === "Custom" && <Check size={20} />}

                    </div>

                    <h3 className="mt-6 text-lg font-semibold">

                        Custom

                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">

                        Enter your own seserahan amount

                    </p>

                    <div className="mt-6 text-lg font-bold">

                        Rp {seserahan.toLocaleString("id-ID")}

                    </div>

                </button>

            </div>

            <div className="mt-8 space-y-3">

                <Label>
                    Custom Seserahan Cost
                </Label>

                <Input
                    type="number"
                    value={seserahan}
                    onChange={(e) =>
                        updateTradition({
                            seserahanPackage: "Custom",
                            seserahan: Number(e.target.value),
                        })
                    }
                />

                <p className="text-xs text-muted-foreground">
                    Override package amount if needed.
                </p>

            </div>

        </AppCard>

    );

}
