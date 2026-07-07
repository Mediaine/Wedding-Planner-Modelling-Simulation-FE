import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";

export default function TraditionPrice() {

    const {

        scenario,

        updateTradition,

    } = useBuilderStore();

    return (

        <div className="space-y-3">

            <Label>

                Custom Tradition Package Price

            </Label>

            <Input

                type="number"

                value={scenario.tradition.packagePrice}

                onChange={(e) =>

                    updateTradition({

                        packagePrice: Number(e.target.value),

                    })

                }

            />

        </div>

    );

}