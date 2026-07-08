import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { TOTAL_BUILDER_STEPS } from "../constants/builder-steps";
import { useBuilderStore } from "@/stores/builder.store";
import { ReviewValidationEngine } from "@/validation/ReviewValidationEngine";
const TOTAL_STEPS = 6;

export default function BuilderFooter() {

  const {
    scenario,
    currentStep,
    previousStep,
    nextStep,
  } = useBuilderStore();

  const isFirst =
    currentStep === 1;

  const isLast =
    currentStep === TOTAL_BUILDER_STEPS;

  const handleRunSimulation = () => {

    // Sprint 15
    // nanti diganti menjadi:
    //
    // ScenarioSimulationEngine.run(...)
    //
    // navigate("/scenario-result")

    toast.success(
      "Scenario is ready for simulation."
    );

    console.log("Run Simulation");

  };

  const validation =
    ReviewValidationEngine.validate(
      scenario,
    );

  return (

    <div className="flex items-center justify-between border-t pt-8">

      <Button
        variant="outline"
        disabled={isFirst}
        onClick={previousStep}
      >
        Previous
      </Button>

      <div className="text-sm text-muted-foreground">

        Step {currentStep} of {TOTAL_STEPS}

      </div>

      <Button

        disabled={
          isLast &&
          !validation.ready
        }

        onClick={
          isLast
            ? handleRunSimulation
            : nextStep
        }

      >

        {

          isLast

            ? "Run Simulation"

            : "Next"

        }

      </Button>

    </div>

  );

}