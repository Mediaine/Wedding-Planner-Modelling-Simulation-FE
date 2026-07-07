import { Check } from "lucide-react";

import { useBuilderStore } from "@/stores/builder.store";

const steps = [

  "Basic",

  "Guest",

  "Venue",

  "Vendor",

  "Tradition",

  "Review",

];

export default function BuilderStepper() {

  const {

    currentStep,

    goToStep,

  } = useBuilderStore();

  return (

    <div className="flex items-center justify-between">

      {

        steps.map((step, index) => {

          const number = index + 1;

          const active = currentStep === number;

          const completed = currentStep > number;

          return (

            <button
              key={step}
              onClick={() => goToStep(number)}
              className="flex flex-col items-center gap-3"
            >

              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  transition-all

                  ${
                    completed
                      ? "bg-primary border-primary text-white"
                      : active
                      ? "border-primary text-primary"
                      : "border-muted text-muted-foreground"
                  }
                `}
              >

                {

                  completed

                    ? <Check size={18}/>

                    : number

                }

              </div>

              <span
                className={`
                  text-sm

                  ${
                    active

                      ? "font-semibold"

                      : "text-muted-foreground"
                  }
                `}
              >

                {step}

              </span>

            </button>

          );

        })

      }

    </div>

  );

}