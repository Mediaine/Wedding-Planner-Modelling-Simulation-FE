import AppCard from "@/components/common/AppCard";
import { useBuilderStore } from "@/stores/builder.store";

function money(value:number){

    return new Intl.NumberFormat(
        "id-ID",
        {
            style:"currency",
            currency:"IDR",
            maximumFractionDigits:0,
        },
    ).format(value);

}

export default function ReviewVendor(){

    const {scenario}=useBuilderStore();

    const vendors=
        Object.values(
            scenario.vendor.selectedPackages
        );

    return(

        <AppCard>

            <h2 className="text-lg font-bold mb-4">

                Vendor Configuration

            </h2>

            <div className="space-y-4">

                {

                    vendors.length===0&&(

                        <p>

                            No vendor selected

                        </p>

                    )

                }

                {

                    vendors.map((vendor)=>(

                        <div
                            key={vendor.packageId}
                            className="flex justify-between"
                        >

                            <span>

                                {vendor.packageName}

                            </span>

                            <strong>

                                {money(vendor.cost)}

                            </strong>

                        </div>

                    ))

                }

            </div>

        </AppCard>

    );

}