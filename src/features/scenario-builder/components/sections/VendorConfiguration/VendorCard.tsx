// import {
//     Check,
// } from "lucide-react";

// import AppCard from "@/components/common/AppCard";

// import type { Vendor } from "@/types/vendor";

// interface Props {

//     vendor: Vendor;

//     selected: boolean;

//     onClick: () => void;

// }

// export default function VendorCard({

//     vendor,

//     selected,

//     onClick,

// }: Props) {

//     return (

//         <button
//             onClick={onClick}
//             className="w-full text-left"
//         >

//             <AppCard>

//                 <div className="flex justify-between">

//                     <div>

//                         <h3 className="font-semibold">

//                             {vendor.name}

//                         </h3>

//                         <p className="mt-2 text-sm text-muted-foreground">

//                             {vendor.description}

//                         </p>

//                         <p className="mt-5 font-bold">

//                             Rp {vendor.cost.toLocaleString("id-ID")}

//                         </p>

//                     </div>

//                     {

//                         selected && (

//                             <Check className="text-primary" />

//                         )

//                     }

//                 </div>

//             </AppCard>

//         </button>

//     );

// }