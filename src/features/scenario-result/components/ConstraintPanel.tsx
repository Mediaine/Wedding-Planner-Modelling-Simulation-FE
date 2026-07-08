import AppCard from "@/components/common/AppCard";

import type { ConstraintResult } from "@/types/constraint";

import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

interface Props {
  constraint: ConstraintResult;
}

export default function ConstraintPanel({
  constraint,
}: Props) {
  return (
    <AppCard>

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          Constraint Validation

        </h2>

        <p className="text-sm text-muted-foreground">

          Business rule verification.

        </p>

      </div>

      <div className="space-y-4">

        {constraint.constraints.map((item) => (

          <div
            key={item.code}
            className="flex items-start gap-3 rounded-lg border p-4"
          >

            {item.valid ? (

              <CheckCircle2
                size={20}
                className="mt-1 text-green-500"
              />

            ) : item.severity === "WARNING" ? (

              <AlertTriangle
                size={20}
                className="mt-1 text-yellow-500"
              />

            ) : (

              <XCircle
                size={20}
                className="mt-1 text-red-500"
              />

            )}

            <div className="flex-1">

              <h3 className="font-semibold">

                {item.title}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {item.message}

              </p>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-6 rounded-xl border bg-muted/30 p-4">

        <p className="text-sm text-muted-foreground">

          Simulation Status

        </p>

        <h2
          className={`mt-2 text-xl font-bold ${
            constraint.passed
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {constraint.passed
            ? "PASSED"
            : "FAILED"}
        </h2>

      </div>

    </AppCard>
  );
}