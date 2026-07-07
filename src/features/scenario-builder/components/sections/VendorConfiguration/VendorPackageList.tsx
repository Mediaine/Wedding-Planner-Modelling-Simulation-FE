import VendorPackageCard from "./VendorPackageCard";
import { useBuilderStore } from "@/stores/builder.store";
import type { Vendor } from "@/types/vendor";
import type { SelectedVendorPackage } from "@/types/vendor";

interface Props {

  vendor: Vendor;

}

export default function VendorPackageList({

  vendor,

}: Props) {

  const {

    scenario,

    updateVendor,

  } = useBuilderStore();

  return (

    <div className="grid gap-4 md:grid-cols-3">

      {

        vendor.packages.map((item)=>{
          
          const selectedPackage =
          scenario.vendor.selectedPackages[vendor.id];

          const selected =
          selectedPackage?.packageId === item.id;

          return(

            <VendorPackageCard

              key={item.id}

              item={item}

              selected={selected}

              onClick={()=>{

                const next: SelectedVendorPackage = {

                  vendorId: vendor.id,

                  packageId: item.id,

                  packageName: item.name,

                  cost: item.cost,

                  };

                  updateVendor({

                  selectedPackages:{

                  ...scenario.vendor.selectedPackages,

                  [vendor.id]: next,

                  },

                  });

              }}

            />

          );

        })

      }

    </div>

  );

}