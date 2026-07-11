interface Props {
    food: number;
    venue: number;
    decoration: number;
    vendor: number;
    tradition: number;
}

function money(value: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(value);
}

export default function WeddingCostBreakdown({
    food,
    venue,
    decoration,
    vendor,
    tradition,
}: Props) {

    return (
        <div className="rounded-xl border p-5 space-y-4">
            <div>
                <h3 className="font-bold">
                    Wedding Cost Breakdown
                </h3>

                <p className="text-sm text-muted-foreground">
                    Cost estimation by category
                </p>
            </div>

            <div className="flex justify-between">
                <span>Food</span>
                <strong>{money(food)}</strong>
            </div>

            <div className="flex justify-between">
                <span>Venue</span>
                <strong>{money(venue)}</strong>
            </div>
            
            {/* <div className="flex justify-between pl-4 text-sm text-muted-foreground">
                <span>Decoration</span>
                <span>{money(decoration)}</span>
            </div> */}

            <div className="flex justify-between">
                <span>Vendor</span>
                <strong>{money(vendor)}</strong>
            </div>

            <div className="flex justify-between">
                <span>Tradition</span>
                <strong>{money(tradition)}</strong>
            </div>

        </div>

    );

}