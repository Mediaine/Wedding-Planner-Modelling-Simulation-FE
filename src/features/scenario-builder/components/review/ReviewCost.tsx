import AppCard from "@/components/common/AppCard";
import { SimulationSummaryService } from "@/services/SimulationSummaryService";
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

export default function ReviewCost(){

    const {scenario}=useBuilderStore();

    const summary=
        SimulationSummaryService.calculate(
            scenario
        );

    return(

        <AppCard>

            <h2 className="text-lg font-bold mb-4">

                Cost Summary

            </h2>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span>Budget</span>

                    <strong>

                        {money(summary.budget)}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Estimated Cost</span>

                    <strong>

                        {money(summary.estimatedCost)}

                    </strong>

                </div>

                <div className="border-t pt-3 flex justify-between">

                    <span>Remaining Budget</span>

                    <strong>

                        {money(summary.remainingBudget)}

                    </strong>

                </div>

            </div>

        </AppCard>

    );

}