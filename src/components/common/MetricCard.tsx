import type { LucideIcon } from "lucide-react";

import AppCard from "./AppCard";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function MetricCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <AppCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className="rounded-xl bg-primary/10 p-4">
          <Icon className="text-primary" size={28} />
        </div>
      </div>
    </AppCard>
  );
}