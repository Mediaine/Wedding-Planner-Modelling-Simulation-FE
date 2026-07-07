import {
    Users,
    HeartHandshake,
    Palette,
    MapPinned,
    Package,
    Armchair,
    UtensilsCrossed,
    Banknote,
} from "lucide-react";

interface Props {

    budget:number;

    concept:string;

    style:string;

    invitation:number;

    attendance:number;

    meal:string;

    seating:string;

    venue:string;

    vendorCount:number;

}

function Row({

    icon,

    title,

    value,

}:{

    icon:React.ReactNode;

    title:string;

    value:React.ReactNode;

}){

    return(

        <div className="flex items-center justify-between border-b py-3 last:border-none">

            <div className="flex items-center gap-3">

                {icon}

                <span className="text-sm">

                    {title}

                </span>

            </div>

            <strong>

                {value}

            </strong>

        </div>

    )

}

function money(value:number){

    return new Intl.NumberFormat(

        "id-ID",

        {

            style:"currency",

            currency:"IDR",

            maximumFractionDigits:0,

        }

    ).format(value);

}

export default function LiveSummary({

    budget,

    concept,

    style,

    invitation,

    attendance,

    meal,

    seating,

    venue,

    vendorCount,

}:Props){

    return(

        <div className="rounded-xl border p-5">

            <h3 className="mb-5 font-bold">

                Live Summary

            </h3>

            <Row

                icon={<Banknote size={18}/>}

                title="Budget"

                value={money(budget)}

            />

            <Row

                icon={<HeartHandshake size={18}/>}

                title="Concept"

                value={concept}

            />

            <Row

                icon={<Palette size={18}/>}

                title="Style"

                value={style}

            />

            <Row

                icon={<Users size={18}/>}

                title="Invitation"

                value={invitation}

            />

            <Row

                icon={<Users size={18}/>}

                title="Attendance"

                value={attendance}

            />

            <Row

                icon={<UtensilsCrossed size={18}/>}

                title="Meal"

                value={meal}

            />

            <Row

                icon={<Armchair size={18}/>}

                title="Seating"

                value={seating}

            />

            <Row

                icon={<MapPinned size={18}/>}

                title="Venue"

                value={venue}

            />

            <Row

                icon={<Package size={18}/>}

                title="Vendor"

                value={`${vendorCount} Vendor`}

            />

        </div>

    )

}