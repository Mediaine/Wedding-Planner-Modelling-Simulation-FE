import AppCard from "@/components/common/AppCard";

import type { WeddingInsight } from "@/types/wedding-insight";

import {
  Lightbulb,
  CircleAlert,
  CircleCheck,
} from "lucide-react";

interface Props {
  insights: WeddingInsight[];
}

export default function InsightPanel({
  insights,
}: Props) {

  return (

    <AppCard>

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          AI Insight

        </h2>

        <p className="text-sm text-muted-foreground">

          AI analysis based on your wedding scenario.

        </p>

      </div>

      {

        insights.length === 0 && (

          <div className="rounded-xl border p-5 text-center">

            <CircleCheck
              size={28}
              className="mx-auto mb-3 text-green-500"
            />

            <p>

              No insight generated.

            </p>

          </div>

        )

      }

      <div className="space-y-4">

        {

          insights.map((item, index) => (

            <div
              key={index}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center gap-3">

                {

                  item.priority === "HIGH"

                  ?

                  <CircleAlert
                    className="text-red-500"
                    size={20}
                  />

                  :

                  <Lightbulb
                    className="text-yellow-500"
                    size={20}
                  />

                }

                <h3 className="font-semibold">

                  {item.title}

                </h3>

              </div>

              <p className="mt-3 text-sm text-muted-foreground">

                {item.message}

              </p>

              <div className="mt-4">

                <span
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                >

                  {item.priority}

                </span>

              </div>

            </div>

          ))

        }

      </div>

    </AppCard>

  );

}