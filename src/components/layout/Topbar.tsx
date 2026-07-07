import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-background px-8">

      <div>

        <h2 className="font-semibold">

          Wedding Studio

        </h2>

        <p className="text-sm text-muted-foreground">

          Wedding Modelling & Simulation

        </p>

      </div>

      <Button>

        <Sparkles />

        New Scenario

      </Button>

    </header>
  );
}