import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useBuilderStore } from "@/stores/builder.store";

const titles = [
  "Wedding Basics",
  "Guest Configuration",
  "Venue Configuration",
  "Vendor Configuration",
  "Tradition Configuration",
  "Review & Simulation",
];

export default function BuilderHeader() {
  const { currentStep } = useBuilderStore();

  const progress = Math.round((currentStep / 6) * 100);

  const { autoPlan } = useBuilderStore();

  return (
    <div className="space-y-5">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            {titles[currentStep - 1]}

          </h2>

          <p className="mt-2 text-muted-foreground">

            Complete each section before running the wedding simulation.

          </p>

        </div>

        <Badge
          variant="secondary"
          className="px-4 py-2"
        >
          {progress}% Completed
        </Badge>

        <Button
            onClick={autoPlan}
        >
            ✨ Auto Plan
        </Button>

      </div>

      <Separator />

    </div>
  );
}