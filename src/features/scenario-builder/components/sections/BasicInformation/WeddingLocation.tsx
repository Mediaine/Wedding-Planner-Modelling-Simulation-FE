import { MapPin } from "lucide-react";

import AppCard from "@/components/common/AppCard";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useBuilderStore } from "@/stores/builder.store";

export default function WeddingLocation() {
  const { scenario, updateBasic } = useBuilderStore();

  return (
    <AppCard>

      <div className="mb-6 flex items-center gap-3">

        <MapPin className="text-primary" />

        <div>

          <h3 className="text-lg font-semibold">

            Wedding Location

          </h3>

          <p className="text-sm text-muted-foreground">

            Province and city where the wedding will take place.

          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <Label>

            Province

          </Label>

          <Input
            placeholder="Example: Jawa Timur"
            value={scenario.basic.province}
            onChange={(e) =>
              updateBasic({
                province: e.target.value,
              })
            }
          />

        </div>

        <div>

          <Label>

            City

          </Label>

          <Input
            placeholder="Example: Surabaya"
            value={scenario.basic.city}
            onChange={(e) =>
              updateBasic({
                city: e.target.value,
              })
            }
          />

        </div>

      </div>

    </AppCard>
  );
}