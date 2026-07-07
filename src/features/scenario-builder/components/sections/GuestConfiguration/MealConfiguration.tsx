import { UtensilsCrossed } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Button } from "@/components/ui/button";

import { useBuilderStore } from "@/stores/builder.store";

export default function MealConfiguration() {
  const { scenario, updateGuest } = useBuilderStore();

  const meal = scenario.guest.meal;

  return (
    <AppCard>
      <div className="mb-6 flex items-center gap-3">
        <UtensilsCrossed className="text-primary" />

        <div>
          <h3 className="text-lg font-semibold">
            Meal Session
          </h3>

          <p className="text-sm text-muted-foreground">
            Choose the main meal session for your reception.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <Button
          variant={meal === "Lunch" ? "default" : "outline"}
          onClick={() =>
            updateGuest({
              meal: "Lunch",
            })
          }
        >
          Lunch
        </Button>

        <Button
          variant={meal === "Dinner" ? "default" : "outline"}
          onClick={() =>
            updateGuest({
              meal: "Dinner",
            })
          }
        >
          Dinner
        </Button>

      </div>
    </AppCard>
  );
}