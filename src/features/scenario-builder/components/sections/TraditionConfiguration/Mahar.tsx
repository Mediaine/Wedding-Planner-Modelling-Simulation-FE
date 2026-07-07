import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";

export default function Mahar() {

    const {

        scenario,

        updateTradition,

    } = useBuilderStore();

    return (

        <div className="space-y-3">

            <Label>

                Mahar

            </Label>

            <Input

                type="number"

                value={scenario.tradition.mahar}

                onChange={(e) =>

                    updateTradition({

                        mahar: Number(e.target.value),

                    })

                }

            />

        </div>

    );

}