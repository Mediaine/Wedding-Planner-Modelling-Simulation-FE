import TraditionPackage from "./TraditionPackage";
import Mahar from "./Mahar";
import Seserahan from "./Seserahan";
import TraditionPreview from "./TraditionPreview";

export default function TraditionConfiguration() {

    return (

        <div className="space-y-8">

            <TraditionPackage />

            <Mahar />

            <Seserahan />

            <TraditionPreview />

        </div>

    );

}
