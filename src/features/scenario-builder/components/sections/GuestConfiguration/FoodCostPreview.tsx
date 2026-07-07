import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { useBuilderStore } from "@/stores/builder.store";

export default function FoodCostPreview() {

    const {

        scenario,

    } = useBuilderStore();

    const attendance =
        scenario.guest.estimatedAttendance;

    const total =
        attendance *
        scenario.guest.mealPrice;

    return (

        <Card>

            <CardContent className="space-y-3 py-5">

                <h3 className="font-semibold">

                    Estimated Food Cost

                </h3>

                <div className="text-3xl font-bold">

                    Rp {total.toLocaleString("id-ID")}

                </div>

                <div className="text-sm text-muted-foreground">

                    {attendance.toLocaleString("id-ID")} Guest × Rp{" "}

                    {scenario.guest.mealPrice.toLocaleString("id-ID")}

                </div>

            </CardContent>

        </Card>

    );

}