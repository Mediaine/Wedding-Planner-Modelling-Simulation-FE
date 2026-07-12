import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import AppCard from "@/components/common/AppCard";

const messages = [
  "Analyzing Budget...",
  "Determining Budget Grade...",
  "Calculating Priority Matrix...",
  "Allocating Budget...",
  "Selecting Venue...",
  "Selecting Decoration...",
  "Selecting Vendors...",
  "Evaluating Tradition...",
  "Generating Timeline...",
  "Running Simulation...",
  "Generating Recommendation...",
  "Finalizing Wedding Plan...",
];

export default function PlannerLoading() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => Math.min(i + 1, messages.length - 1));
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppCard>
      <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">

        <Loader2 className="animate-spin text-primary" size={48} />

        <div>
          <h2 className="text-xl font-bold">
            Generating Your Wedding Plans
          </h2>
          <p className="mt-2 text-muted-foreground">
            {messages[index]}
          </p>
        </div>

        <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-200"
            style={{
              width: `${((index + 1) / messages.length) * 100}%`,
            }}
          />
        </div>

      </div>
    </AppCard>
  );
}
