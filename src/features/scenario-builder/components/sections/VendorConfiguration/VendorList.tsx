// import VendorCard from "./VendorCard";

// import { vendors } from "./vendor.data";

// import { useBuilderStore } from "@/stores/builder.store";

// interface Props {

//     category: string;

// }

// export default function VendorList({

//     category,

// }: Props) {

//     const {

//         scenario,

//         updateVendor,

//     } = useBuilderStore();

//     const selected =

//         scenario.vendor.selectedPackages;

//     return (

//         <div className="grid gap-5 md:grid-cols-2">

//             {

//                 vendors

//                     .filter(x => x.category === category)

//                     .map((vendor) => (

//                         <VendorCard

//                             key={vendor.id}

//                             vendor={vendor}

//                             selected={

//                                 selected.includes(vendor.id)

//                             }

//                             onClick={() => {

//                                 const exists =

//                                     selected.includes(vendor.id);

//                                 updateVendor({

//                                     selectedPackages:

//                                         exists

//                                             ?

//                                             selected.filter(

//                                                 x => x !== vendor.id

//                                             )

//                                             :

//                                             [

//                                                 ...selected,

//                                                 vendor.id,

//                                             ],

//                                 });

//                             }}

//                         />

//                     ))

//             }

//         </div>

//     );

// }