import type { WeddingInsight } from "@/types/wedding-insight";

interface Props {

    items: WeddingInsight[];

}

export default function WeddingInsightPanel({

    items,

}: Props) {

    return (

        <div className="rounded-xl border p-5">

            <h3 className="mb-5 font-bold">

                AI Wedding Insight

            </h3>

            <div className="space-y-4">

                {

                    items.map((item, index) => (

                        <div
                            key={index}
                            className="rounded-lg border bg-muted/30 p-4"
                        >

                            <div className="flex items-center justify-between">

                                <h4 className="font-semibold">

                                    {item.title}

                                </h4>

                                <span className="text-xs rounded bg-primary/10 px-2 py-1">

                                    {item.priority}

                                </span>

                            </div>

                            <p className="mt-2 text-sm text-muted-foreground">

                                {item.message}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}