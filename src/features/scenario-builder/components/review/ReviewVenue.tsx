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

export default function ReviewVenue(){

    const {scenario}=useBuilderStore();

    return(

        <AppCard>

            <h2 className="text-lg font-bold mb-4">

                Venue Configuration

            </h2>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span>Venue</span>

                    <strong>

                        {scenario.venue.venueType||"-"}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Decoration</span>

                    <strong>

                        {scenario.venue.decorationPackage||"-"}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Venue Rental</span>

                    <strong>

                        {money(
                            scenario.venue.estimatedCost
                        )}

                    </strong>

                </div>

                <div className="flex justify-between">

                    <span>Decoration Cost</span>

                    <strong>

                        {money(
                            scenario.venue.decorationCost
                        )}

                    </strong>

                </div>

                <div className="flex justify-between border-t pt-3">

                    <span>Total Venue Cost</span>

                    <strong>

                        {money(
                            scenario.venue.estimatedCost +
                            scenario.venue.decorationCost
                        )}

                    </strong>

                </div>

            </div>

        </AppCard>

    );

}