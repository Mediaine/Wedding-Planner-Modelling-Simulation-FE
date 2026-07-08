import AppCard from "@/components/common/AppCard";
import { useBuilderStore } from "@/stores/builder.store";

function Row({
    label,
    value,
}:{
    label:string;
    value:React.ReactNode;
}){

    return(

        <div className="flex justify-between py-2">

            <span className="text-muted-foreground">

                {label}

            </span>

            <strong>{value}</strong>

        </div>

    );

}

export default function ReviewBasic(){

    const {scenario}=useBuilderStore();

    return(

        <AppCard>

            <h2 className="text-lg font-bold mb-4">

                Basic Information

            </h2>

            {/* <Row
                label="Scenario"
                value={scenario.basic.name}
            /> */}

            <Row
                label="Budget"
                value={`Rp ${scenario.basic.budget.toLocaleString("id-ID")}`}
            />

            <Row
                label="Concept"
                value={scenario.basic.concept}
            />

            <Row
                label="Style"
                value={scenario.basic.style}
            />

            {/* <Row
                label="Wedding Date"
                value={scenario.basic.date}
            /> */}

            <Row
                label="Province"
                value={scenario.basic.province}
            />

            <Row
                label="City"
                value={scenario.basic.city}
            />

        </AppCard>

    );

}