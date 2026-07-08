import AppCard from "@/components/common/AppCard";
import { useBuilderStore } from "@/stores/builder.store";

function money(value:number){

    return new Intl.NumberFormat(
        "id-ID",
        {
            style:"currency",
            currency:"IDR",
            maximumFractionDigits:0,
        },
    ).format(value);

}

export default function ReviewGuest(){

    const {scenario}=useBuilderStore();

    const attendance=
        scenario.guest.estimatedAttendance;

    const food=
        attendance*
        scenario.guest.mealPrice;

    return(

        <AppCard>

            <h2 className="text-lg font-bold mb-4">

                Guest Configuration

            </h2>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span>Invitation</span>

                    <strong>

                        {scenario.guest.invitation}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Attendance</span>

                    <strong>

                        {attendance}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Meal</span>

                    <strong>

                        {scenario.guest.meal}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Meal Price</span>

                    <strong>

                        {money(scenario.guest.mealPrice)}

                    </strong>

                </div>

                <div className="border-t pt-3 flex justify-between">

                    <span>Food Cost</span>

                    <strong>

                        {money(food)}

                    </strong>

                </div>

            </div>

        </AppCard>

    );

}