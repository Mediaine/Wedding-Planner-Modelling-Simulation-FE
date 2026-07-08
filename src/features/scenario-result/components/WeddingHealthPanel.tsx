import AppCard from "@/components/common/AppCard";
import HealthBadge from "@/components/common/HealthBadge";

import type { WeddingHealth } from "@/types/wedding-health";

interface Props {
  health: WeddingHealth;
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

export default function WeddingHealthPanel({
  health,
}: Props) {

  return (

    <AppCard>

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          Wedding Health

        </h2>

        <p className="text-sm text-muted-foreground">

          AI health evaluation of your wedding scenario.

        </p>

      </div>

      <HealthBadge
        level={health.level}
      />

      <div className="mt-6 rounded-xl border bg-muted/30 p-6">

        <p className="text-sm text-muted-foreground">

          Health Score

        </p>

        <h1 className="mt-2 text-5xl font-black">

          {health.score}

        </h1>

        <p className="text-sm text-muted-foreground">

          out of 100

        </p>

      </div>

      <div className="mt-6">

        <Row
          label="Food Allocation"
          value={`${health.foodPercentage}%`}
        />

        <Row
          label="Venue Allocation"
          value={`${health.venuePercentage}%`}
        />

        <Row
          label="Vendor Allocation"
          value={`${health.vendorPercentage}%`}
        />

        <Row
          label="Tradition Allocation"
          value={`${health.traditionPercentage}%`}
        />

      </div>

    </AppCard>

  );

}