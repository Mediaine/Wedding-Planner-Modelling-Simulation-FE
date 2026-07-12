import VendorCategory from "./VendorCategory";

export default function VendorConfiguration() {

    return (

        <div className="space-y-12">

            <VendorCategory
                category="Documentation"
            />

            <VendorCategory
                category="Food & Beverage"
            />

            <VendorCategory
                category="Drink & Beverage"
            />

            <VendorCategory
                category="Entertainment"
            />

            <VendorCategory
                category="Beauty"
            />

            <VendorCategory
                category="Master of Ceremony"
            />

            <VendorCategory
                category="Wedding Organizer"
            />


        </div>

    );

}