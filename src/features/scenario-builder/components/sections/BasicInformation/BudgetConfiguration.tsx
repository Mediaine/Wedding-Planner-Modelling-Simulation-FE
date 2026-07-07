import { Minus, Plus, Wallet } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Button } from "@/components/ui/button";

import { useBuilderStore } from "@/stores/builder.store";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function BudgetConfiguration() {

  const {
    scenario,
    updateBasic,
  } = useBuilderStore();

  const budget = scenario.basic.budget;

  const update = (value: number) => {

    updateBasic({
      budget: value,
    });

  };

  return (

    <AppCard>

      <div className="flex items-center gap-3 mb-6">

        <Wallet className="text-primary"/>

        <div>

          <h3 className="font-semibold text-lg">

            Wedding Budget

          </h3>

          <p className="text-muted-foreground text-sm">

            Set your available wedding budget.

          </p>

        </div>

      </div>

      <div className="mb-6">

        <h2 className="text-4xl font-bold">

          {formatCurrency(budget)}

        </h2>

      </div>

      <input
        className="w-full"
        type="range"
        min={10000000}
        max={500000000}
        step={5000000}
        value={budget}
        onChange={(e)=>update(Number(e.target.value))}
      />

      <div className="mt-6 flex justify-between">

        <Button
          variant="outline"
          onClick={()=>update(Math.max(10000000,budget-5000000))}
        >

          <Minus/>

        </Button>

        <Button
          variant="outline"
          onClick={()=>update(Math.min(500000000,budget+5000000))}
        >

          <Plus/>

        </Button>

      </div>

    </AppCard>

  );

}