import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { useBuilderStore } from "@/stores/builder.store";

const meals = [
    "Lunch",
    "Dinner",
] as const;

export default function MealConfiguration() {

    const {
        scenario,
        updateGuest,
    } = useBuilderStore();

    return (

        <div className="space-y-4">

            <div>

                <h3 className="font-semibold">
                    Meal Configuration
                </h3>

                <p className="text-sm text-muted-foreground">
                    Select meal session
                </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

                {meals.map((meal) => {

                    const active =
                        scenario.guest.meal === meal;

                    return (

                        <Card
                            key={meal}
                            onClick={() =>
                                updateGuest({
                                    meal,
                                })
                            }

                            className={`
rounded-2xl
border
p-6
text-left
transition-all

${active
                                    ?
                                    "border-primary bg-primary/5 shadow"
                                    :
                                    "hover:border-primary"
                                }
`}

                        >

                            <CardContent className="py-6 text-center">

                                <h4 className="font-semibold">

                                    {meal}

                                </h4>

                            </CardContent>

                        </Card>

                    );

                })}

            </div>

        </div>

    );

}