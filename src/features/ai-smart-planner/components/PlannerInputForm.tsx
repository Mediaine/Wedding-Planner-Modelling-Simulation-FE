import { Sparkles } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSmartPlannerStore } from "@/stores/smart-planner.store";

interface Props {
  onGenerate: () => void;
}

export default function PlannerInputForm({
  onGenerate,
}: Props) {

  const { input, setInput } = useSmartPlannerStore();

  return (
    <AppCard>

      <div className="mb-8">
        <h2 className="text-xl font-bold">
          AI Smart Planner
        </h2>
        <p className="text-muted-foreground">
          Tell us the essentials — the AI generates the full wedding plan for you.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="space-y-3">
          <Label>Budget (IDR)</Label>
          <Input
            type="number"
            value={input.budget}
            onChange={(e) =>
              setInput({ budget: Number(e.target.value) })
            }
          />
        </div>

        <div className="space-y-3">
          <Label>Estimated Guest</Label>
          <Input
            type="number"
            value={input.guestCount}
            onChange={(e) =>
              setInput({ guestCount: Number(e.target.value) })
            }
          />
        </div>

        <div className="space-y-3">
          <Label>Province</Label>
          <Input
            type="text"
            placeholder="e.g. Jawa Barat"
            value={input.province}
            onChange={(e) =>
              setInput({ province: e.target.value })
            }
          />
        </div>

        <div className="space-y-3">
          <Label>City</Label>
          <Input
            type="text"
            placeholder="e.g. Bandung"
            value={input.city}
            onChange={(e) =>
              setInput({ city: e.target.value })
            }
          />
        </div>

      </div>

      <Button
        className="mt-8 w-full gap-2"
        disabled={input.budget <= 0 || input.guestCount <= 0}
        onClick={onGenerate}
      >
        <Sparkles size={18} />
        Generate Wedding Plans
      </Button>

    </AppCard>
  );
}
