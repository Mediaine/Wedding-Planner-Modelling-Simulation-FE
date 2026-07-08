import type { WeddingScenario } from "@/types/scenario";
import type {
    ReviewValidation,
    ValidationItem,
} from "@/types/review-validation";

export class ReviewValidationEngine {

    static validate(
        scenario:WeddingScenario,
    ):ReviewValidation{

        const items:ValidationItem[]=[

            {

                key:"budget",

                title:"Budget",

                valid:scenario.basic.budget>0,

                message:
                    scenario.basic.budget>0
                    ?"Budget has been configured."
                    :"Budget is required.",

            },

            {

                key:"guest",

                title:"Guest",

                valid:
                    scenario.guest.invitation>0,

                message:
                    scenario.guest.invitation>0
                    ?"Guest configuration completed."
                    :"Guest information is required.",

            },

            {

                key:"venue",

                title:"Venue",

                valid:
                    scenario.venue.venueType!== "",

                message:
                    scenario.venue.venueType
                    ?"Venue selected."
                    :"Please select a venue.",

            },

            {

                key:"vendor",

                title:"Vendor",

                valid:
                    Object.keys(
                        scenario.vendor.selectedPackages,
                    ).length>0,

                message:
                    Object.keys(
                        scenario.vendor.selectedPackages,
                    ).length>0
                    ?"Vendor selected."
                    :"Please select at least one vendor.",

            },

            {

                key:"tradition",

                title:"Tradition",

                valid:true,

                message:"Tradition configuration completed.",

            },

        ];

        return{

            ready:
                items.every(
                    x=>x.valid,
                ),

            items,

        };

    }

}