import {
    Gem,
    Gift,
    Landmark,
} from "lucide-react";

interface Props {

    traditionType: string;

    packagePrice: number;

    mahar: number;

    seserahan: number;

    total: number;

}

function money(value: number) {

    return new Intl.NumberFormat("id-ID", {

        style: "currency",

        currency: "IDR",

        maximumFractionDigits: 0,

    }).format(value);

}

export default function TraditionCard({

    traditionType,

    packagePrice,

    mahar,

    seserahan,

    total,

}: Props) {

    return (

        <div className="rounded-xl border p-5 space-y-5">

            <div>

                <h3 className="font-bold">

                    Tradition

                </h3>

                <p className="text-sm text-muted-foreground">

                    Traditional wedding estimation

                </p>

            </div>

            <div className="flex justify-between">

                <div className="flex items-center gap-2">

                    <Landmark size={18}/>

                    Tradition

                </div>

                <strong>

                    {traditionType || "-"}

                </strong>

            </div>

            <div className="flex justify-between">

                <div className="flex items-center gap-2">

                    <Landmark size={18}/>

                    Package

                </div>

                <strong>

                    {money(packagePrice)}

                </strong>

            </div>

            <div className="flex justify-between">

                <div className="flex items-center gap-2">

                    <Gem size={18}/>

                    Mahar

                </div>

                <strong>

                    {money(mahar)}

                </strong>

            </div>

            <div className="flex justify-between">

                <div className="flex items-center gap-2">

                    <Gift size={18}/>

                    Seserahan

                </div>

                <strong>

                    {money(seserahan)}

                </strong>

            </div>

            <div className="border-t pt-4 flex justify-between">

                <span className="font-semibold">

                    Total Tradition

                </span>

                <strong className="text-lg text-primary">

                    {money(total)}

                </strong>

            </div>

        </div>

    );

}