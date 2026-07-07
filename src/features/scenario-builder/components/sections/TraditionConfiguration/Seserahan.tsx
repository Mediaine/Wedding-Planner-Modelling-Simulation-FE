import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";

export default function Seserahan() {

    const {

        scenario,

        updateTradition,

    } = useBuilderStore();

    return (

        <div className="space-y-3">

            <Label>

                Seserahan

            </Label>

            <Input

                type="number"

                value={scenario.tradition.seserahan}

                onChange={(e) =>

                    updateTradition({

                        seserahan: Number(e.target.value),

                    })

                }

            />

        </div>

    );

}