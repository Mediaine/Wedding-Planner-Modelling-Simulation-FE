import TraditionPackage from "./TraditionPackage";
import TraditionPrice from "./TraditionPrice";
import Mahar from "./Mahar";
import Seserahan from "./Seserahan";
import TraditionPreview from "./TraditionPreview";

export default function TraditionConfiguration() {

    return (

        <div className="space-y-8">

            <TraditionPackage />

            <TraditionPrice />

            <Mahar />

            <Seserahan />

            <TraditionPreview />

        </div>

    );

}