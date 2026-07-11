import { Check, Package } from "lucide-react";

import type { VendorPackage } from "@/types/vendor";

interface Props {

    item: VendorPackage;

    selected: boolean;

    disabled?: boolean;

    onClick: () => void;

}

export default function VendorPackageCard({

    item,

    selected,

    disabled = false,

    onClick,

}: Props) {

    return (

        <button
            onClick={onClick}
            disabled={disabled}
            className={`
rounded-2xl
border
p-6
text-left
transition-all

${selected
                    ?
                    "border-primary bg-primary/5 shadow"
                    :
                    disabled
                        ?
                        "opacity-50 cursor-not-allowed"
                        :
                        "hover:border-primary"
                }
`}

        >

            <div className="flex items-center justify-between">

                <Package size={32} />

                {selected && <Check size={20} />}

            </div>

            <h3 className="mt-6 text-lg font-semibold">

                {item.name}

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

                {item.description}

            </p>

            <div className="mt-6 text-lg font-bold">

                Rp {item.cost.toLocaleString("id-ID")}

            </div>

        </button>

    );

}
