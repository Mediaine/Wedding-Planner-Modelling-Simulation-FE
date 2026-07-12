import { useState } from "react";

import PlannerInputForm from "./components/PlannerInputForm";
import PlannerLoading from "./components/PlannerLoading";
import PlanComparison from "./components/PlanComparison";
import { useSmartPlannerStore } from "@/stores/smart-planner.store";

type Phase = "input" | "loading" | "plans";

export default function AISmartPlannerPage() {

  const [phase, setPhase] = useState<Phase>("input");

  const { generate, reset } = useSmartPlannerStore();

  const handleGenerate = () => {
    setPhase("loading");

    // Deterministic generation is instant; the short delay simply
    // plays the AI loading sequence before revealing the plans.
    window.setTimeout(() => {
      generate();
      setPhase("plans");
    }, 2600);
  };

  const handleReset = () => {
    reset();
    setPhase("input");
  };

  return (
    <div className="container mx-auto max-w-6xl space-y-6 py-8">

      {phase === "input" && (
        <PlannerInputForm onGenerate={handleGenerate} />
      )}

      {phase === "loading" && <PlannerLoading />}

      {phase === "plans" && (
        <PlanComparison onReset={handleReset} />
      )}

    </div>
  );
}
