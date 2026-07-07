import {
  Armchair,
  Banknote,
  HeartHandshake,
  MapPinned,
  Package,
  Palette,
  Users,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";

import AppCard from "@/components/common/AppCard";
import HealthBadge from "@/components/common/HealthBadge";
import RecommendationList from "@/components/common/RecommendationList";
import { useBuilderStore } from "@/stores/builder.store";
import { SimulationSummaryService } from "@/services/SimulationSummaryService";

function money(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b py-3 last:border-none">

      <div className="flex items-center gap-3">

        {icon}

        <span className="text-sm text-muted-foreground">

          {label}

        </span>

      </div>

      <span className="font-semibold">

        {value}

      </span>

    </div>
  );
}

export default function SimulationSummary() {

  const { scenario } = useBuilderStore();

  const summary =
    SimulationSummaryService.calculate(
      scenario
    );

  const percent =
    summary.budget === 0
      ? 0
      : (summary.remainingBudget /
        summary.budget) *
      100;

  return (

    <div className="sticky top-6">

      <AppCard>

        <div className="mb-6">
          <h2 className="text-xl font-bold">
            Live Summary
          </h2>

          <p className="text-sm text-muted-foreground">
            Updated Automatically
          </p>
        </div>

        <HealthBadge
          level={summary.health.level}
        />

        <Row
          icon={<Banknote size={18} />}
          label="Budget"
          value={money(summary.budget)}
        />

        <Row
          icon={<HeartHandshake size={18} />}
          label="Concept"
          value={summary.concept}
        />

        <Row
          icon={<Palette size={18} />}
          label="Style"
          value={summary.style}
        />

        <Row
          icon={<Users size={18} />}
          label="Invitation"
          value={summary.invitation}
        />

        <Row
          icon={<Users size={18} />}
          label="Attendance"
          value={summary.attendance}
        />

        <Row
          icon={<UtensilsCrossed size={18} />}
          label="Meal"
          value={summary.meal}
        />

        <Row
          icon={<Armchair size={18} />}
          label="Seating"
          value={summary.seating}
        />

        <Row
          icon={<MapPinned size={18} />}
          label="Venue"
          value={summary.venue}
        />

        <Row
          icon={<Package size={18} />}
          label="Vendor"
          value={`${summary.vendorCount} Vendor`}
        />

        <Row
          icon={<Wallet size={18} />}
          label="Estimated Cost"
          value={money(summary.estimatedCost)}
        />

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">
              Remaining Budget
            </span>
            <span className="font-bold">
              {money(summary.remainingBudget)}
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{
                width: `${percent}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            Budget Allocation
          </h3>
          <div className="mt-4 space-y-2">
            <p>
              Food {summary.health.foodPercentage}%
            </p>
            <p>
              Venue {summary.health.venuePercentage}%
            </p>
            <p>
              Vendor {summary.health.vendorPercentage}%
            </p>
            <p>
              Tradition {summary.health.traditionPercentage}%
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            Health Score
          </p>

          <p className="text-xl font-bold">
            {summary.health.score}/100
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-4">
          Recommendation
          </h3>
          <RecommendationList
          items={summary.recommendations}
          />
        </div>

      </AppCard>

    </div>

  );

}