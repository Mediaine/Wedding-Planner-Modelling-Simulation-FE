import ReviewBasic from "./ReviewBasic";
import ReviewGuest from "./ReviewGuest";
import ReviewVenue from "./ReviewVenue";
import ReviewVendor from "./ReviewVendor";
import ReviewTradition from "./ReviewTradition";
import ReviewCost from "./ReviewCost";
import ReviewValidation from "./ReviewValidation";

export default function Review() {

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-2xl font-bold">

                    Wedding Scenario Review

                </h1>

                <p className="text-muted-foreground">

                    Please review your wedding scenario before running the simulation.

                </p>

            </div>

            <ReviewBasic />

            <ReviewGuest />

            <ReviewVenue />

            <ReviewVendor />

            <ReviewTradition />

            <ReviewCost />

            <ReviewValidation />

        </div>

    );

}