import {
  Building2,
  Check,
  House,
  Hotel,
  Trees,
  Warehouse,
} from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { useBuilderStore } from "@/stores/builder.store";

const venueTypes = [
  {
    value: "Building",
    title: "Building",
    description: "Convention Hall",
    cost: 25000000,
    icon: Building2,
  },
  {
    value: "Hotel",
    title: "Hotel Ballroom",
    description: "Premium Ballroom",
    cost: 45000000,
    icon: Hotel,
  },
  {
    value: "Garden",
    title: "Garden",
    description: "Outdoor Garden",
    cost: 30000000,
    icon: Trees,
  },
  {
    value: "Home",
    title: "Private Home",
    description: "Family Residence",
    cost: 5000000,
    icon: House,
  },
  {
    value: "Outdoor",
    title: "Outdoor",
    description: "Open Area",
    cost: 20000000,
    icon: Warehouse,
  },
] as const;

export default function VenueType() {
  const { scenario, updateVenue } = useBuilderStore();

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

      </div>

    </AppCard>
  );
}
