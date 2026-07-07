import { Inbox } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-20">

      <Inbox size={60} className="text-muted-foreground" />

      <h3 className="mt-6 text-xl font-semibold">

        No Data

      </h3>

      <p className="mt-2 text-muted-foreground">

        Nothing to display yet.

      </p>

    </div>
  );
}