import { Check, Sparkles } from "lucide-react";

import VendorPackageCard from "./VendorPackageCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  const selectedPackages =
    scenario.vendor.selectedPackages;

  const customId =
    `${vendor.id}-custom`;

  const customEntry =
    selectedPackages[customId];

  const customSelected =
    Boolean(customEntry);

  const customCost =
    customEntry?.cost ?? 0;

  const presetIds =
    vendor.packages.map((p) => p.id);

  const toggle = (
    key: string,
    entry: SelectedVendorPackage,
  ) => {

    const next = {
      ...selectedPackages,
    };

    if (next[key]) {

      delete next[key];

    } else {

      next[key] = entry;

    }

    updateVendor({
      selectedPackages: next,
    });

  };

  // Selecting Custom is exclusive per vendor:
  // it clears this vendor's preset packages and keeps only the custom entry.
  const selectCustom = (
    cost: number,
  ) => {

    const next = {
      ...selectedPackages,
    };

    presetIds.forEach((id) => {
      delete next[id];
    });

    next[customId] = {
      vendorId: vendor.id,
      packageId: customId,
      packageName: "Custom",
      cost,
    };

    updateVendor({
      selectedPackages: next,
    });

  };

  const clearCustom = () => {

    const next = {
      ...selectedPackages,
    };

    delete next[customId];

    updateVendor({
      selectedPackages: next,
    });

  };

  return (

    <div className="space-y-8">

      <div className="grid gap-5 lg:grid-cols-3">

        {

          vendor.packages.map((item) => {

            const selected =
              Boolean(selectedPackages[item.id]);

            return (

              <VendorPackageCard

                key={item.id}

                item={item}

                selected={selected}

                disabled={customSelected}

                onClick={() =>
                  toggle(item.id, {
                    vendorId: vendor.id,
                    packageId: item.id,
                    packageName: item.name,
                    cost: item.cost,
                  })
                }

              />

            );

          })

        }

        <button
          onClick={() =>
            customSelected
              ? clearCustom()
              : selectCustom(customCost)
          }
          className={`
rounded-2xl
border
p-6
text-left
transition-all

${customSelected
              ?
              "border-primary bg-primary/5 shadow"
              :
              "hover:border-primary"
            }
`}

        >

          <div className="flex items-center justify-between">

            <Sparkles size={32} />

            {customSelected && <Check size={20} />}

          </div>

          <h3 className="mt-6 text-lg font-semibold">

            Custom

          </h3>

          <p className="mt-2 text-sm text-muted-foreground">

            Enter your own {vendor.name.toLowerCase()} price

          </p>

          <div className="mt-6 text-lg font-bold">

            Rp {customCost.toLocaleString("id-ID")}

          </div>

        </button>

      </div>

      <div className="space-y-3">

        <Label>
          Custom {vendor.name} Cost
        </Label>

        <Input
          type="number"
          value={customCost}
          onChange={(e) =>
            selectCustom(Number(e.target.value))
          }
        />

        <p className="text-xs text-muted-foreground">
          Add a custom price for this vendor if needed.
        </p>

      </div>

    </div>

  );

}
