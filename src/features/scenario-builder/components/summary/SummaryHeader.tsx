import HealthBadge from "@/components/common/HealthBadge";

interface Props {
    score: number;
    level: "EXCELLENT" | "GOOD" | "WARNING" | "DANGER";
}

export default function SummaryHeader({
    score,
    level,
}: Props) {
    return (
        <div className="space-y-5">

            <div>

                <h2 className="text-2xl font-bold">
                    Wedding Health
                </h2>

                <p className="text-sm text-muted-foreground">
                    AI Wedding Analysis
                </p>

            </div>

            <HealthBadge level={level} />

            <div className="rounded-xl border bg-muted/30 p-5">

                <p className="text-sm text-muted-foreground">
                    Health Score
                </p>

                <h1 className="mt-2 text-5xl font-black">
                    {score}
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    out of 100
                </p>

            </div>

        </div>
    );
}

