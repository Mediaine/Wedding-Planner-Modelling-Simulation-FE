import {
  Building2,
  Check,
  House,
  Hotel,
  Sparkles,
  Trees,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBuilderStore } from "@/stores/builder.store";
import { venueCatalog } from "@/data/venue-catalog";

const venueIcons: Record<string, LucideIcon> = {
  Building: Building2,
  Hotel: Hotel,
  Garden: Trees,
  Home: House,
  Outdoor: Warehouse,
};

const venueTypes = venueCatalog.map((item) => ({
  ...item,
  icon: venueIcons[item.value],
}));

export default function VenueType() {
  const { scenario, updateVenue } = useBuilderStore();

  const { venueType, estimatedCost } = scenario.venue;

  return (
    <AppCard>

      <div className="mb-8">

        <h2 className="text-xl font-bold">
          Venue Type
        </h2>

        <p className="text-muted-foreground">
          Choose where your wedding reception will be held.
        </p>

      </div>

      <div className="grid gap-5 lg:grid-cols-3">

        {venueTypes.map((item) => {

          const Icon = item.icon;

          const active =
            scenario.venue.venueType === item.value;

          return (

            <button
              key={item.value}
              onClick={() =>
                updateVenue({
                  venueType: item.value,
                  estimatedCost: item.cost,
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

                <Icon size={32} />

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
              venueType: "Custom",
            })
          }
          className={`
rounded-2xl
border
p-6
text-left
transition-all

${venueType === "Custom"
              ?
              "border-primary bg-primary/5 shadow"
              :
              "hover:border-primary"
            }
`}

        >

          <div className="flex items-center justify-between">

            <Sparkles size={32} />

            {venueType === "Custom" && <Check size={20} />}

          </div>

          <h3 className="mt-6 text-lg font-semibold">

            Custom Venue

          </h3>

          <p className="mt-2 text-sm text-muted-foreground">

            Enter your own venue price

          </p>

          <div className="mt-6 text-lg font-bold">

            Rp {estimatedCost.toLocaleString("id-ID")}

          </div>

        </button>

      </div>

      <div className="mt-8 space-y-3">

        <Label>
          Custom Venue Cost
        </Label>

        <Input
          type="number"
          value={estimatedCost}
          onChange={(e) =>
            updateVenue({
              venueType: "Custom",
              estimatedCost: Number(e.target.value),
            })
          }
        />

        <p className="text-xs text-muted-foreground">
          Override venue price if needed.
        </p>

      </div>

    </AppCard>
  );
}
