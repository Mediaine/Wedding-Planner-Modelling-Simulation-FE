import {
    Camera,
    MapPinned,
    HeartHandshake,
    UtensilsCrossed,
} from "lucide-react";

interface Props {
    food: number;
    venue: number;
    vendor: number;
    tradition: number;
}

function Item({

    icon,

    title,

    value,

}:{

    icon:React.ReactNode;

    title:string;

    value:number;

}){

    return(

        <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

                {icon}

                <span>{title}</span>

            </div>

            <strong>

                {value}%

            </strong>

        </div>

    )

}

export default function BudgetAllocation({

    food,

    venue,

    vendor,

    tradition,

}:Props){

    return(

        <div className="rounded-xl border p-5 space-y-5">

            <h3 className="font-bold">

                Budget Allocation

            </h3>

            <Item

                icon={<UtensilsCrossed size={18}/>}

                title="Food"

                value={food}

            />

            <Item

                icon={<MapPinned size={18}/>}

                title="Venue"

                value={venue}

            />

            <Item

                icon={<Camera size={18}/>}

                title="Vendor"

                value={vendor}

            />

            <Item

                icon={<HeartHandshake size={18}/>}

                title="Tradition"

                value={tradition}

            />

        </div>

    )

}