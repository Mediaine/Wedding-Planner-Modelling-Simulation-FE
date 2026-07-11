import { Check, Sparkles, UtensilsCrossed } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";
import type { MealPackage as MealPackageType } from "@/types/scenario";

const mealPackages: {
  value: Exclude<MealPackageType, "Custom" | "">;
  title: string;
  description: string;
  price: number;
}[] = [
  {
    value: "Economy",
    title: "Economy",
    description: "Basic catering menu",
    price: 35000,
  },
  {
    value: "Standard",
    title: "Standard",
    description: "Balanced catering menu",
    price: 45000,
  },
  {
    value: "Premium",
    title: "Premium",
    description: "Premium catering menu",
    price: 60000,
  },
  {
    value: "Luxury",
    title: "Luxury",
    description: "Luxury catering menu",
    price: 85000,
  },
];

export default function MealPackage() {
  const { scenario, updateGuest } = useBuilderStore();

  const { mealPackage, mealPrice } = scenario.guest;

  return (
    <AppCard>

      <div className="mb-8">

        <h2 className="text-xl font-bold">
          Meal Package
        </h2>

        <p className="text-muted-foreground">
          Choose a catering package or enter a custom price per guest.
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-3">

        {mealPackages.map((item) => {

          const active = mealPackage === item.value;

          return (

            <button
              key={item.value}
              onClick={() =>
                updateGuest({
                  mealPackage: item.value,
                  mealPrice: item.price,
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

                <UtensilsCrossed size={32} />

                {active && <Check size={20} />}

              </div>

              <h3 className="mt-6 text-lg font-semibold">

                {item.title}

              </h3>

              <p className="mt-2 text-sm text-muted-foreground">

                {item.description}

              </p>

              <div className="mt-6 text-lg font-bold">

                Rp {item.price.toLocaleString("id-ID")}

              </div>

            </button>

          );

        })}

        <button
          onClick={() =>
            updateGuest({
              mealPackage: "Custom",
            })
          }
          className={`
rounded-2xl
border
p-6
text-left
transition-all

${mealPackage === "Custom"
              ?
              "border-primary bg-primary/5 shadow"
              :
              "hover:border-primary"
            }
`}

        >

          <div className="flex items-center justify-between">

            <Sparkles size={32} />

            {mealPackage === "Custom" && <Check size={20} />}

          </div>

          <h3 className="mt-6 text-lg font-semibold">

            Custom Meal

          </h3>

          <p className="mt-2 text-sm text-muted-foreground">

            Enter your own meal price

          </p>

          <div className="mt-6 text-lg font-bold">

            Rp {mealPrice.toLocaleString("id-ID")}

          </div>

        </button>

      </div>

      <div className="mt-8 space-y-3">

        <Label>
          Custom Meal Price
        </Label>

        <Input
          type="number"
          value={mealPrice}
          onChange={(e) =>
            updateGuest({
              mealPackage: "Custom",
              mealPrice: Number(e.target.value),
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
