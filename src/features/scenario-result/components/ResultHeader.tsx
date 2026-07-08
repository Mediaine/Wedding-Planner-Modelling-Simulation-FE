import AppCard from "@/components/common/AppCard";

interface Props {
  generatedAt: Date;
}

export default function ResultHeader({
  generatedAt,
}: Props) {
  return (
    <AppCard>

      <div className="space-y-2">

        <h1 className="text-3xl font-bold">

          Wedding Simulation Result

        </h1>

        <p className="text-muted-foreground">

          Comprehensive analysis of your wedding scenario.

        </p>

      </div>

      <div className="mt-6 rounded-xl border bg-muted/30 p-4">

        <p className="text-sm text-muted-foreground">

          Generated At

        </p>

        <h2 className="mt-1 text-lg font-semibold">

          {generatedAt.toLocaleString("id-ID")}

        </h2>

      </div>

    </AppCard>
  );
}