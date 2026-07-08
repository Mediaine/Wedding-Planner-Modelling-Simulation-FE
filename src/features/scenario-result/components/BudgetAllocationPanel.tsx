// import {
//     Camera,
//     MapPinned,
//     HeartHandshake,
//     UtensilsCrossed,
// } from "lucide-react";

// interface Props {
//     food: number;
//     venue: number;
//     vendor: number;
//     tradition: number;
// }

// function Item({

//     icon,

//     title,

//     value,

// }:{

//     icon:React.ReactNode;

//     title:string;

//     value:number;

// }){

//     return(

//         <div className="flex items-center justify-between">

//             <div className="flex items-center gap-3">

//                 {icon}

//                 <span>{title}</span>

//             </div>

//             <strong>

//                 {value}%

//             </strong>

//         </div>

//     )

// }

// export default function BudgetAllocation({

//     food,

//     venue,

//     vendor,

//     tradition,

// }:Props){

//     return(

//         <div className="rounded-xl border p-5 space-y-5">

//             <h3 className="font-bold">

//                 Budget Allocation

//             </h3>

//             <Item

//                 icon={<UtensilsCrossed size={18}/>}

//                 title="Food"

//                 value={food}

//             />

//             <Item

//                 icon={<MapPinned size={18}/>}

//                 title="Venue"

//                 value={venue}

//             />

//             <Item

//                 icon={<Camera size={18}/>}

//                 title="Vendor"

//                 value={vendor}

//             />

//             <Item

//                 icon={<HeartHandshake size={18}/>}

//                 title="Tradition"

//                 value={tradition}

//             />

//         </div>

//     )

// }

import AppCard from "@/components/common/AppCard";

import type { BudgetAllocation } from "@/types/budget-allocation";

interface Props {
  allocation: BudgetAllocation;
}

function Progress({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (

    <div>

      <div className="mb-2 flex items-center justify-between">

        <span>

          {label}

        </span>

        <strong>

          {value}%

        </strong>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-muted">

        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>

  );
}

export default function BudgetAllocationPanel({
  allocation,
}: Props) {

  return (

    <AppCard>

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          Budget Allocation

        </h2>

        <p className="text-sm text-muted-foreground">

          Distribution of wedding expenses.

        </p>

      </div>

      <div className="space-y-5">

        <Progress
          label="Food"
          value={allocation.food}
        />

        <Progress
          label="Venue"
          value={allocation.venue}
        />

        <Progress
          label="Vendor"
          value={allocation.vendor}
        />

        <Progress
          label="Tradition"
          value={allocation.tradition}
        />

        <Progress
          label="Remaining"
          value={allocation.remaining}
        />

      </div>

    </AppCard>

  );

}