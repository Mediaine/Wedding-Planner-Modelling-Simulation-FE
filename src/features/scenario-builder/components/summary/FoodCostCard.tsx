import {
    UtensilsCrossed,
    Users,
    Wallet,
} from "lucide-react";

interface Props {
    attendance: number;
    mealPrice: number;
    foodCost: number;
}

function money(value: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(value);
}

export default function FoodCostCard({
    attendance,
    mealPrice,
    foodCost,

}: Props) {
    return (
        <div className="rounded-xl border p-5 space-y-5">
            <div>
                <h3 className="font-bold">
                    Food & Catering
                </h3>
                <p className="text-sm text-muted-foreground">
                    Consumption estimation
                </p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>Attendance</span>
                </div>

                <strong>
                    {attendance.toLocaleString("id-ID")} Pax
                </strong>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <UtensilsCrossed size={18} />
                    <span>Meal Price</span>
                </div>

                <strong>
                    {money(mealPrice)}
                </strong>
            </div>

            <div className="border-t pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Wallet size={18} />
                    <span>Total Cost</span>
                </div>

                <strong className="text-lg text-primary">
                    {money(foodCost)}
                </strong>
            </div>

        </div>

    );

}