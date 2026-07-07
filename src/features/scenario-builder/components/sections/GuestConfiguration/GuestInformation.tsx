import { Users } from "lucide-react";

import AppCard from "@/components/common/AppCard";
import { Button } from "@/components/ui/button";

import { useBuilderStore } from "@/stores/builder.store";

export default function GuestInformation() {

  const {
    scenario,
    updateGuest,
  } = useBuilderStore();

  const invitation = scenario.guest.invitation;

  function update(value: number) {

    const estimatedAttendance = value * 2;

    updateGuest({

      invitation: value,

      estimatedAttendance,

    });

  }

  return (

    <AppCard>

      <div className="mb-6 flex items-center gap-3">

        <Users className="text-primary"/>

        <div>

          <h3 className="text-lg font-semibold">

            Invitation

          </h3>

          <p className="text-sm text-muted-foreground">

            Number of invitations you plan to send.

          </p>

        </div>

      </div>

      <div className="flex items-center justify-center gap-8">

        <Button
          variant="outline"
          onClick={() => update(Math.max(100, invitation - 50))}
        >
          -
        </Button>

        <div className="text-center">

          <h2 className="text-5xl font-bold">

            {invitation}

          </h2>

          <p className="text-muted-foreground">

            Invitations

          </p>

        </div>

        <Button
          variant="outline"
          onClick={() => update(invitation + 50)}
        >
          +
        </Button>

      </div>

    </AppCard>

  );

}