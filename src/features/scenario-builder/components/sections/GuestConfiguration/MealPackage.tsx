import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { useBuilderStore } from "@/stores/builder.store";

const packages = [

    {
        name: "Economy",
        price: 35000,
    },

    {
        name: "Standard",
        price: 45000,
    },

    {
        name: "Premium",
        price: 60000,
    },

    {
        name: "Luxury",
        price: 85000,
    },

];

export default function MealPackage() {

    const {

        scenario,

        updateGuest,

    } = useBuilderStore();

    return (

        <div className="space-y-4">

            <div>

                <h3 className="font-semibold">

                    Meal Package

                </h3>

                <p className="text-sm text-muted-foreground">

                    Choose catering package

                </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

                {

                    packages.map((item) => {

                        const active =
                            scenario.guest.mealPrice === item.price;

                        return (

                            <Card

                                key={item.name}

                                onClick={() =>

                                    updateGuest({

                                        mealPrice: item.price,

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

                                <CardContent className="space-y-2 py-5 text-center">

                                    <h4 className="font-semibold">

                                        {item.name}

                                    </h4>

                                    <p className="text-sm text-muted-foreground">

                                        Rp {item.price.toLocaleString("id-ID")}

                                    </p>

                                </CardContent>

                            </Card>

                        );

                    })

                }

            </div>

        </div>

    );

}