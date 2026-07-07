import type { LucideIcon } from "lucide-react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import AppCard from "./AppCard";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export default function QuickActionCard({
  title,
  description,
  icon: Icon,
  onClick,
}: Props) {
  return (
    <AppCard className="flex flex-col justify-between">

      <div>

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">

          <Icon className="text-primary" />

        </div>

        <h3 className="font-semibold text-lg">

          {title}

        </h3>

        <p className="mt-2 text-sm text-muted-foreground">

          {description}

        </p>

      </div>

      <Button
        className="mt-6 w-full"
        onClick={onClick}
      >

        Open

        <ArrowRight />

      </Button>

    </AppCard>
  );
}