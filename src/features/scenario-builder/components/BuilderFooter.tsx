import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { TOTAL_BUILDER_STEPS } from "../constants/builder-steps";
import { useBuilderStore } from "@/stores/builder.store";
import { ReviewValidationEngine } from "@/validation/ReviewValidationEngine";
import { ScenarioSimulationEngine } from "@/simulation/scenario/ScenarioSimulationEngine";
import { useScenarioResultStore } from "@/stores/scenario-result.store";
import { useNavigate } from "react-router-dom";

const TOTAL_STEPS = 6;

export default function BuilderFooter() {

  const navigate =
    useNavigate();

  const {
    setResult,
  } = useScenarioResultStore();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  const validation =
    ReviewValidationEngine.validate(
      scenario,
    );
  
  const handleRunSimulation = () => {
    try {
      const result =
        ScenarioSimulationEngine.run(
          scenario,
        );

      setResult(result);

      // console.log(result);

      toast.success(
        "Simulation completed successfully.",
      );

      // Navigasi to page
      // navigate("/scenario-result");
      navigate("/simulation-loading");

    } catch (error) {

      // console.error(error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Simulation failed.",
      );
    }
  };


  return (
    <div className="flex items-center justify-between border-t pt-8">
      <Button
        variant="outline"
        disabled={isFirst}
        onClick={() => {
          previousStep();
          scrollTop();
        }}
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
        
        onClick={() => {
          if (isLast) {
            handleRunSimulation();
          } else {
            nextStep();
            scrollTop();
          }
        }}
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
