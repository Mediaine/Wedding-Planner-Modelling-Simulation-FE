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

export default function ReviewTradition(){

    const {scenario}=useBuilderStore();

    const total=

        scenario.tradition.packagePrice+

        scenario.tradition.mahar+

        scenario.tradition.seserahan;

    return(

        <AppCard>

            <h2 className="text-lg font-bold mb-4">

                Tradition Configuration

            </h2>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span>Tradition</span>

                    <strong>

                        {scenario.tradition.traditionType||"-"}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Package</span>

                    <strong>

                        {money(
                            scenario.tradition.packagePrice
                        )}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Mahar</span>

                    <strong>

                        {money(
                            scenario.tradition.mahar
                        )}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Seserahan</span>

                    <strong>

                        {money(
                            scenario.tradition.seserahan
                        )}

                    </strong>

                </div>

                <div className="border-t pt-3 flex justify-between">

                    <span>Total</span>

                    <strong>

                        {money(total)}

                    </strong>

                </div>

            </div>

        </AppCard>

    );

}