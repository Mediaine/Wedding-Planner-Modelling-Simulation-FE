import type { Recommendation } from "@/types/recommendation";

interface Props {

    items: Recommendation[];

}

export default function RecommendationList({

    items,

}: Props) {

    return (

        <div className="space-y-3">

            {

                items.map((item, index) => (

                    <div

                        key={index}

                        className="rounded-xl border p-4"

                    >

                        <p className="font-semibold">

                            {item.title}

                        </p>

                        <p className="text-sm text-muted-foreground mt-1">

                            {item.message}

                        </p>

                    </div>

                ))

            }

        </div>

    );

}