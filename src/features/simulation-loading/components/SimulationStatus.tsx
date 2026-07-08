import AppCard from "@/components/common/AppCard";

interface Props {

  budget: number;

  guest: number;

  venue: string;

  vendor: number;

}

function money(value: number) {

  return new Intl.NumberFormat("id-ID", {

    style: "currency",

    currency: "IDR",

    maximumFractionDigits: 0,

  }).format(value);

}

export default function SimulationStatus({
  budget,
  guest,
  venue,
  vendor,
}: Props) {

  return (

    <AppCard>

      <h2 className="text-xl font-bold">

        Scenario Overview

      </h2>

      <p className="mb-6 text-sm text-muted-foreground">

        AI is reading your wedding scenario.

      </p>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-xl border p-4">

          <p className="text-sm text-muted-foreground">

            Budget

          </p>

          <h3 className="mt-2 font-bold">

            {money(budget)}

          </h3>

        </div>

        <div className="rounded-xl border p-4">

          <p className="text-sm text-muted-foreground">

            Guest

          </p>

          <h3 className="mt-2 font-bold">

            {guest.toLocaleString()} Pax

          </h3>

        </div>

        <div className="rounded-xl border p-4">

          <p className="text-sm text-muted-foreground">

            Venue

          </p>

          <h3 className="mt-2 font-bold">

            {venue}

          </h3>

        </div>

        <div className="rounded-xl border p-4">

          <p className="text-sm text-muted-foreground">

            Vendor

          </p>

          <h3 className="mt-2 font-bold">

            {vendor}

          </h3>

        </div>

      </div>

    </AppCard>

  );

}
