import {
    CheckCircle2,
    XCircle,
} from "lucide-react";

import AppCard from "@/components/common/AppCard";

import { useBuilderStore } from "@/stores/builder.store";

import { ReviewValidationEngine } from "@/validation/ReviewValidationEngine";

export default function ReviewValidation(){

    const {scenario}=useBuilderStore();

    const validation=
        ReviewValidationEngine.validate(
            scenario,
        );

    return(

        <AppCard>

            <h2 className="text-lg font-bold mb-4">

                Validation

            </h2>

            <div className="space-y-4">

                {

                    validation.items.map(item=>(

                        <div
                            key={item.key}
                            className="flex items-start gap-3"
                        >

                            {

                                item.valid

                                ?

                                <CheckCircle2
                                    className="text-green-500"
                                    size={20}
                                />

                                :

                                <XCircle
                                    className="text-red-500"
                                    size={20}
                                />

                            }

                            <div>

                                <p className="font-medium">

                                    {item.title}

                                </p>

                                <p className="text-sm text-muted-foreground">

                                    {item.message}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

            <div className="mt-6 rounded-xl border p-4">

                <p className="text-sm text-muted-foreground">

                    Simulation Status

                </p>

                <h2 className="text-xl font-bold mt-2">

                    {

                        validation.ready

                        ?

                        "READY FOR SIMULATION"

                        :

                        "NOT READY"

                    }

                </h2>

            </div>

        </AppCard>

    );

}