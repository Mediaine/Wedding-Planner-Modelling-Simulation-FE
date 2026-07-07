import type { SelectedVendorPackage } from "@/types/vendor";

export class VendorEngine {
  static calculate(
    vendors: Record<string, SelectedVendorPackage>,
  ): number {

    return Object
      .values(vendors)
      .reduce(
      (sum, vendor) => sum + vendor.cost,
      0,
    );

  }
}


// import type { SelectedVendorPackage } from "@/types/vendor";

// export class VendorEngine {

//     static calculate(
//         vendors: Record<string, SelectedVendorPackage>,
//     ): number {

//         return Object
//             .values(vendors)
//             .reduce(
//                 (total, vendor) => total + vendor.cost,
//                 0,
//             );

//     }

//     static count(
//         vendors: Record<string, SelectedVendorPackage>,
//     ): number {

//         return Object.keys(vendors).length;

//     }

// }