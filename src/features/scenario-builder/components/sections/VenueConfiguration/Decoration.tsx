import { Check, Flower2, Sparkles } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";
import { decorationCatalog as decorationPackages } from "@/data/decoration-catalog";

export default function Decoration() {
  const { scenario, updateVenue } = useBuilderStore();

  const { decorationPackage, decorationCost } = scenario.venue;

  return (
    <AppCard>

      <div className="mb-8">

        <h2 className="text-xl font-bold">
          Decoration
        </h2>

        <p className="text-muted-foreground">
          Decoration is part of your venue cost. Choose a package or enter a
          custom price.
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-3">

        {decorationPackages.map((item) => {

          const active = decorationPackage === item.value;

          return (

            <button
              key={item.value}
              onClick={() =>
                updateVenue({
                  decorationPackage: item.value,
                  decorationCost: item.cost,
                })
              }
              className={`
rounded-2xl
border
p-6
text-left
transition-all

${active
                  ?
                  "border-primary bg-primary/5 shadow"
                  :
                  "hover:border-primary"
                }
`}

            >

              <div className="flex items-center justify-between">

                <Flower2 size={32} />

                {active && <Check size={20} />}

              </div>

              <h3 className="mt-6 text-lg font-semibold">

                {item.title}

              </h3>

              <p className="mt-2 text-sm text-muted-foreground">

                {item.description}

              </p>

              <div className="mt-6 text-lg font-bold">

                Rp {item.cost.toLocaleString("id-ID")}

              </div>

            </button>

          );

        })}

        <button
          onClick={() =>
            updateVenue({
              decorationPackage: "Custom",
            })
          }
          className={`
rounded-2xl
border
p-6
text-left
transition-all

${decorationPackage === "Custom"
              ?
              "border-primary bg-primary/5 shadow"
              :
              "hover:border-primary"
            }
`}

        >

          <div className="flex items-center justify-between">

            <Sparkles size={32} />

            {decorationPackage === "Custom" && <Check size={20} />}

          </div>

          <h3 className="mt-6 text-lg font-semibold">

            Custom Decoration

          </h3>

          <p className="mt-2 text-sm text-muted-foreground">

            Enter your own decoration price

          </p>

          <div className="mt-6 text-lg font-bold">

            Rp {decorationCost.toLocaleString("id-ID")}

          </div>

        </button>

      </div>

      <div className="mt-8 space-y-3">

        <Label>
          Custom Decoration Cost
        </Label>

        <Input
          type="number"
          value={decorationCost}
          onChange={(e) =>
            updateVenue({
              decorationPackage: "Custom",
              decorationCost: Number(e.target.value),
            })
          }
        />

        <p className="text-xs text-muted-foreground">
          Override package price if needed.
        </p>

      </div>

    </AppCard>
  );
}
