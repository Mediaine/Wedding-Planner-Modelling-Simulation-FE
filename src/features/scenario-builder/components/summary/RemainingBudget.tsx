interface Props {

    remaining: number;

}

function money(value: number) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0,

    }).format(value);

}

export default function RemainingBudget({

    remaining,

}: Props) {

    return (

        <div
            className={`rounded-xl border p-5 ${
                remaining >= 0
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
            }`}
        >

            <p className="text-sm">

                Remaining Budget

            </p>

            <h2 className="mt-2 text-3xl font-bold">

                {money(remaining)}

            </h2>

            <p className="mt-2 text-xs">

                {remaining >= 0
                    ? "Budget masih aman."
                    : "Budget melebihi batas."}

            </p>

        </div>

    );

}