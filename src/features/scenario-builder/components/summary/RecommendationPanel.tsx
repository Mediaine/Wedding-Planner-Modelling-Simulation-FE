import type { Recommendation } from "@/types/recommendation";

import {
    CircleCheck,
    TriangleAlert,
} from "lucide-react";

interface Props{

    items:Recommendation[];

}

export default function RecommendationPanel({

    items,

}:Props){

    return(

        <div className="rounded-xl border p-5">

            <h3 className="mb-5 font-bold">

                Recommendation

            </h3>

            <div className="space-y-4">

                {

                    items.length===0&&(

                        <div className="text-sm text-muted-foreground">

                            No recommendation.

                        </div>

                    )

                }

                {

                    items.map((item,index)=>(

                        <div

                            key={index}

                            className="flex items-start gap-3 rounded-lg border p-4"

                        >

                            {

                                item.title==="Over Budget"

                                ?

                                <TriangleAlert

                                    size={18}

                                    className="mt-0.5 text-red-500"

                                />

                                :

                                <CircleCheck

                                    size={18}

                                    className="mt-0.5 text-green-500"

                                />

                            }

                            <div>

                                <h4 className="font-semibold">

                                    {item.title}

                                </h4>

                                <p className="mt-1 text-sm text-muted-foreground">

                                    {item.message}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}