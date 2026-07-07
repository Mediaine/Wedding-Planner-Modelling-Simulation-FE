import type { SelectedVendorPackage } from "@/types/vendor";

export class VendorEngine {
  static calculate(
    vendors: Record<string, SelectedVendorPackage>,
  ): number {

    return Object.values(vendors).reduce(
      (sum, vendor) => sum + vendor.cost,
      0,
    );

  }
}