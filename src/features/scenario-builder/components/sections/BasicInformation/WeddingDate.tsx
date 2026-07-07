import { CalendarDays } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Input } from "@/components/ui/input";

import { useBuilderStore } from "@/stores/builder.store";

export default function WeddingDate() {
  const { scenario, updateBasic } = useBuilderStore();

  return (
    <AppCard>

      <div className="mb-6 flex items-center gap-3">

        <CalendarDays className="text-primary" />

        <div>

          <h3 className="text-lg font-semibold">

            Wedding Date

          </h3>

          <p className="text-sm text-muted-foreground">

            Planned wedding date.

          </p>

        </div>

      </div>

      <Input
        type="date"
        value={scenario.basic.weddingDate}
        onChange={(e) =>
          updateBasic({
            weddingDate: e.target.value,
          })
        }
      />

    </AppCard>
  );
}