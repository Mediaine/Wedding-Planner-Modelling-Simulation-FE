import { UsersRound } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { useBuilderStore } from "@/stores/builder.store";

export default function AttendanceEstimation() {
  const { scenario } = useBuilderStore();

  return (
    <AppCard>
      <div className="mb-6 flex items-center gap-3">
        <UsersRound className="text-primary" />

        <div>
          <h3 className="text-lg font-semibold">
            Estimated Attendance
          </h3>

          <p className="text-sm text-muted-foreground">
            Estimated guests based on invitation count.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-6xl font-bold">
          {scenario.guest.estimatedAttendance}
        </h2>

        <p className="mt-2 text-muted-foreground">
          Guests
        </p>
      </div>
    </AppCard>
  );
}