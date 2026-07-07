import { Armchair } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Button } from "@/components/ui/button";

import { useBuilderStore } from "@/stores/builder.store";

export default function SeatingConfiguration() {
  const { scenario, updateGuest } = useBuilderStore();

  const seating = scenario.guest.seating;

  return (
    <AppCard>
      <div className="mb-6 flex items-center gap-3">
        <Armchair className="text-primary" />

        <div>
          <h3 className="text-lg font-semibold">
            Seating Configuration
          </h3>

          <p className="text-sm text-muted-foreground">
            Select how guests will enjoy the event.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <Button
          variant={seating === "Standing" ? "default" : "outline"}
          onClick={() =>
            updateGuest({
              seating: "Standing",
            })
          }
        >
          Standing Party
        </Button>

        <Button
          variant={seating === "Seated" ? "default" : "outline"}
          onClick={() =>
            updateGuest({
              seating: "Seated",
            })
          }
        >
          Seated Reception
        </Button>

      </div>
    </AppCard>
  );
}