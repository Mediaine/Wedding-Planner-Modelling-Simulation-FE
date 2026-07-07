import { Check, Palette } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { useBuilderStore } from "@/stores/builder.store";

const styles = [
  {
    value: "Modern",
    title: "Modern",
    description: "Simple, elegant and timeless.",
  },
  {
    value: "Traditional",
    title: "Traditional",
    description: "Traditional cultural wedding.",
  },
  {
    value: "Luxury",
    title: "Luxury",
    description: "Premium wedding experience.",
  },
  {
    value: "Garden",
    title: "Garden",
    description: "Outdoor garden wedding.",
  },
  {
    value: "Outdoor",
    title: "Outdoor",
    description: "Nature inspired wedding.",
  },
  {
    value: "Rustic",
    title: "Rustic",
    description: "Warm vintage atmosphere.",
  },
] as const;

export default function WeddingStyle() {
  const { scenario, updateBasic } = useBuilderStore();

  return (
    <AppCard>

      <div className="mb-6 flex items-center gap-3">

        <Palette className="text-primary" />

        <div>

          <h3 className="text-lg font-semibold">
            Wedding Style
          </h3>

          <p className="text-sm text-muted-foreground">
            Choose your wedding style.
          </p>

        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-3">

        {styles.map((style) => {

          const active =
            scenario.basic.style === style.value;

          return (

            <button
              key={style.value}
              onClick={() =>
                updateBasic({
                  style: style.value,
                })
              }
              className={`
                rounded-2xl
                border
                p-5
                text-left
                transition-all

                ${
                  active
                    ? "border-primary bg-primary/5"
                    : "hover:border-primary"
                }
              `}
            >

              <div className="mb-4 flex items-center justify-between">

                <h4 className="font-semibold">
                  {style.title}
                </h4>

                {active && <Check size={18} />}

              </div>

              <p className="text-sm text-muted-foreground">

                {style.description}

              </p>

            </button>

          );

        })}

      </div>

    </AppCard>
  );
}