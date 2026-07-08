interface Props {

    budget: number;

    estimatedCost: number;

    remainingBudget: number;

}

function money(value: number) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0,

    }).format(value);

}

export default function CostOverview({

    budget,

    estimatedCost,

    remainingBudget,

}: Props) {

    return (

        <div className="rounded-xl border p-5 space-y-4">

            <div>

                <h3 className="font-bold">

                    Cost Overview

                </h3>

                <p className="text-sm text-muted-foreground">

                    Live estimation

                </p>

            </div>

            <div className="flex justify-between">

                <span>Budget</span>

                <strong>

                    {money(budget)}

                </strong>

            </div>

            <div className="flex justify-between">

                <span>Estimated Cost</span>

                <strong>

                    {money(estimatedCost)}

                </strong>

            </div>

            <div className="border-t pt-4 flex justify-between">

                <span>Remaining Budget</span>

                <strong className="text-primary">

                    {money(remainingBudget)}

                </strong>

            </div>

        </div>

    );

}