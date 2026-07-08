import { Progress } from "@/components/ui/progress";

interface Props {
  progress: number;
}

export default function SimulationProgress({
  progress,
}: Props) {
  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium">
          Simulation Progress
        </span>

        <span className="text-sm font-bold">
          {progress}%
        </span>

      </div>

      <Progress
        value={progress}
        className="h-3"
      />

    </div>
  );
}