import {
  CheckCircle2,
  LoaderCircle,
  Circle,
} from "lucide-react";

interface Props {
  steps: string[];
  currentStep: number;
}

export default function SimulationSteps({
  steps,
  currentStep,
}: Props) {

  return (

    <div className="rounded-2xl border bg-muted/30 p-6">

      <h3 className="mb-6 text-lg font-bold">

        Simulation Pipeline

      </h3>

      <div className="space-y-4">

        {

          steps.map((step, index) => {

            const completed =
              index < currentStep;

            const active =
              index === currentStep;

            return (

              <div
                key={step}
                className="flex items-center gap-4"
              >

                {

                  completed && (

                    <CheckCircle2
                      size={22}
                      className="text-green-500"
                    />

                  )

                }

                {

                  active && (

                    <LoaderCircle
                      size={22}
                      className="animate-spin text-primary"
                    />

                  )

                }

                {

                  !completed &&
                  !active && (

                    <Circle
                      size={22}
                      className="text-muted-foreground"
                    />

                  )

                }

                <span
                  className={
                    completed || active
                      ? "font-medium"
                      : "text-muted-foreground"
                  }
                >

                  {step}

                </span>

              </div>

            );

          })

        }

      </div>

    </div>

  );

}