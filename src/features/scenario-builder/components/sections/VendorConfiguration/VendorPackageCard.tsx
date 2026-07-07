import { Check } from "lucide-react";

import AppCard from "@/components/common/AppCard";

import type { VendorPackage } from "@/types/vendor";

interface Props {

    item: VendorPackage;

    selected: boolean;

    onClick: () => void;

}

export default function VendorPackageCard({

    item,

    selected,

    onClick,

}: Props) {

    return (

        <button

            className="w-full text-left"

            onClick={onClick}

        >

            <AppCard
                className={`
transition-all
hover:shadow-lg

${selected
                        ?

                        "border-primary bg-primary/5"

                        :

                        ""

                    }
`}
            >

                <div className="flex justify-between">

                    <div>

                        <h4 className="font-semibold">

                            {item.name}

                        </h4>

                        <p className="mt-2 text-sm text-muted-foreground">

                            {item.description}

                        </p>

                        <p className="mt-5 font-bold">

                            Rp {item.cost.toLocaleString("id-ID")}

                        </p>

                    </div>

                    {

                        selected &&

                        <Check className="text-primary" />

                    }

                </div>

            </AppCard>

        </button>

    );

}