import {
    Banknote,
    Wallet,
} from "lucide-react";

interface Props {

    budget: number;

    spent: number;

    remaining: number;

}

function money(value: number) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0,

    }).format(value);

}

export default function BudgetOverview({

    budget,

    spent,

    remaining,

}: Props) {

    const percentage =
        budget === 0
            ? 0
            : Math.min(
                  100,
                  (spent / budget) * 100,
              );

    return (

        <div className="space-y-5 rounded-xl border p-5">

            <h3 className="font-bold">

                Budget Overview

            </h3>

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                    <Banknote size={18} />

                    <span>Total Budget</span>

                </div>

                <strong>

                    {money(budget)}

                </strong>

            </div>

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                    <Wallet size={18} />

                    <span>Spent</span>

                </div>

                <strong>

                    {money(spent)}

                </strong>

            </div>

            <div className="flex items-center justify-between">

                <span>

                    Remaining

                </span>

                <strong>

                    {money(remaining)}

                </strong>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-muted">

                <div

                    className="h-full rounded-full bg-primary"

                    style={{

                        width: `${percentage}%`,

                    }}

                />

            </div>

        </div>

    );

}