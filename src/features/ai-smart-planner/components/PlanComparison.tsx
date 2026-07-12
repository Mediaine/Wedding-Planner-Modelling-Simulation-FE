import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import PlanCard from "./PlanCard";
import { useSmartPlannerStore } from "@/stores/smart-planner.store";
import { useBuilderStore } from "@/stores/builder.store";
import type { GeneratedPlan } from "@/types/smart-planner";

interface Props {
  onReset: () => void;
}

export default function PlanComparison({
  onReset,
}: Props) {

  const navigate = useNavigate();

  const { plans } = useSmartPlannerStore();

  const { loadScenario } = useBuilderStore();

  const handleSelect = (plan: GeneratedPlan) => {
    loadScenario(plan.scenario);
    toast.success(
      `${plan.objective.name} plan loaded into the Scenario Builder.`,
    );
    navigate("/scenario-builder");
  };

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">
            Generated Wedding Plans
          </h2>
          <p className="text-muted-foreground">
            Compare the AI-generated alternatives and pick one to continue. You can still edit it before simulating.
          </p>
        </div>

        <Button
          variant="outline"
          className="gap-2"
          onClick={onReset}
        >
          <RotateCcw size={16} />
          New Plan
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.objective.id}
            plan={plan}
            onSelect={handleSelect}
          />
        ))}
      </div>

    </div>
  );
}
