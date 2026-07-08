// import type { Recommendation } from "@/types/recommendation";

// import {
//     CircleCheck,
//     TriangleAlert,
// } from "lucide-react";

// interface Props{

//     items:Recommendation[];

// }

// export default function RecommendationPanel({

//     items,

// }:Props){

//     return(

//         <div className="rounded-xl border p-5">

//             <h3 className="mb-5 font-bold">

//                 Recommendation

//             </h3>

//             <div className="space-y-4">

//                 {

//                     items.length===0&&(

//                         <div className="text-sm text-muted-foreground">

//                             No recommendation.

//                         </div>

//                     )

//                 }

//                 {

//                     items.map((item,index)=>(

//                         <div

//                             key={index}

//                             className="flex items-start gap-3 rounded-lg border p-4"

//                         >

//                             {

//                                 item.title==="Over Budget"

//                                 ?

//                                 <TriangleAlert

//                                     size={18}

//                                     className="mt-0.5 text-red-500"

//                                 />

//                                 :

//                                 <CircleCheck

//                                     size={18}

//                                     className="mt-0.5 text-green-500"

//                                 />

//                             }

//                             <div>

//                                 <h4 className="font-semibold">

//                                     {item.title}

//                                 </h4>

//                                 <p className="mt-1 text-sm text-muted-foreground">

//                                     {item.message}

//                                 </p>

//                             </div>

//                         </div>

//                     ))

//                 }

//             </div>

//         </div>

//     )

// }

import AppCard from "@/components/common/AppCard";

import type { Recommendation } from "@/types/recommendation";

import {
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface Props {
  recommendations: Recommendation[];
}

export default function RecommendationPanel({
  recommendations,
}: Props) {

  return (

    <AppCard>

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          Recommendation

        </h2>

        <p className="text-sm text-muted-foreground">

          AI recommendations to improve your wedding plan.

        </p>

      </div>

      {

        recommendations.length === 0 && (

          <div className="rounded-xl border p-5 text-center">

            <CheckCircle2
              className="mx-auto mb-3 text-green-500"
              size={28}
            />

            <p>

              No recommendation.

            </p>

          </div>

        )

      }

      <div className="space-y-4">

        {

          recommendations.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border p-4"
            >

              <AlertTriangle
                className="mt-1 text-yellow-500"
                size={20}
              />

              <div>

                <h3 className="font-semibold">

                  {item.title}

                </h3>

                <p className="mt-1 text-sm text-muted-foreground">

                  {item.message}

                </p>

              </div>

            </div>

          ))

        }

      </div>

    </AppCard>

  );

}