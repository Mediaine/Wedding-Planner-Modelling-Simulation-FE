import { Button } from "@/components/ui/button";

import { useBuilderStore } from "@/stores/builder.store";

export default function BuilderFooter() {
  const {
    currentStep,
    previousStep,
    nextStep,
  } = useBuilderStore();

  const isFirst = currentStep === 1;
  const isLast = currentStep === 6;

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

        Step {currentStep} of 6

      </div>

      {!isLast ? (
        <Button onClick={nextStep}>
          Next
        </Button>
      ) : (
        <Button>

          Run Simulation

        </Button>
      )}

    </div>
  );
}