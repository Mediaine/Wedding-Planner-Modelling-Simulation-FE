import AppCard from "@/components/common/AppCard";

import type { WeddingCalculation } from "@/types/wedding-engine";

interface Props {
  calculation: WeddingCalculation;
}

function money(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function Row({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b py-3 last:border-none">

      <span className="text-muted-foreground">

        {label}

      </span>

      <strong>

        {value}

      </strong>

    </div>
  );
}

export default function BudgetSummaryPanel({
  calculation,
}: Props) {
  return (
    <AppCard>

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          Budget Summary

        </h2>

        <p className="text-sm text-muted-foreground">

          Overall wedding financial summary.

        </p>

      </div>

      <Row
        label="Budget"
        value={money(calculation.budget)}
      />

      <Row
        label="Food Cost"
        value={money(calculation.foodCost)}
      />

      <Row
        label="Venue Cost"
        value={money(calculation.venueCost)}
      />

      <Row
        label="Vendor Cost"
        value={money(calculation.vendorCost)}
      />

      <Row
        label="Tradition Cost"
        value={money(calculation.traditionCost)}
      />

      <Row
        label="Estimated Cost"
        value={money(calculation.totalCost)}
      />

      <Row
        label="Remaining Budget"
        value={money(calculation.remainingBudget)}
      />

      <Row
        label="Budget Usage"
        value={`${calculation.budgetUsage}%`}
      />

    </AppCard>
  );
}