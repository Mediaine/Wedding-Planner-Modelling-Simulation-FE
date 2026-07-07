import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";

export default function MealPrice() {

    const {

        scenario,

        updateGuest,

    } = useBuilderStore();

    return (

        <div className="space-y-3">

            <Label>

                Custom Meal Price

            </Label>

            <Input

                type="number"

                value={scenario.guest.mealPrice}

                onChange={(e) =>

                    updateGuest({

                        mealPrice: Number(e.target.value),

                    })

                }

            />

            <p className="text-xs text-muted-foreground">

                Override package price if needed.

            </p>

        </div>

    );

}