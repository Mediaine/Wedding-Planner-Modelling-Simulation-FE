import { Sparkles } from "lucide-react";

import AppCard from "./AppCard";

interface Props {
  title: string;
  description: string;
}

export default function TipCard({
  title,
  description,
}: Props) {
  return (
    <AppCard>

      <div className="flex gap-4">

        <Sparkles className="mt-1 text-primary" />

        <div>

          <h3 className="font-semibold">

            {title}

          </h3>

          <p className="mt-2 text-sm text-muted-foreground">

            {description}

          </p>

        </div>

      </div>

    </AppCard>
  );
}