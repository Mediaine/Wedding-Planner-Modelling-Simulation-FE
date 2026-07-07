export interface VendorPackage {
  id: string;
  name: string;
  description: string;
  cost: number;
}

export interface Vendor {
  id: string;
  category: string;
  name: string;
  packages: VendorPackage[];
}

export interface SelectedVendorPackage {
  vendorId: string;
  packageId: string;
  packageName: string;
  cost: number;
}

export interface VendorConfiguration {
  selectedPackages: Record<string, SelectedVendorPackage>;
}