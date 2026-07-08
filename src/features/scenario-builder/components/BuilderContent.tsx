import { useBuilderStore } from "@/stores/builder.store";
import BasicInformation from "./sections/BasicInformation";
import GuestConfiguration from "./sections/GuestConfiguration";
import VenueConfiguration from "./sections/VenueConfiguration";
import SimulationSummary from "./SimulationSummary";
import VendorConfiguration from "./sections/VendorConfiguration";
import TraditionConfiguration from "./sections/TraditionConfiguration";
import Review from "./review";
export default function BuilderContent() {

  const { currentStep } = useBuilderStore();

  function renderSection() {

    switch (currentStep) {

      case 1:
        return <BasicInformation />;

      case 2:
        return <GuestConfiguration />;

      case 3:
        return <VenueConfiguration/>;

      case 4:
        return <VendorConfiguration/>;

      case 5:
        return <TraditionConfiguration />;

      case 6:
         return <Review />;

      default:
        return null;

    }

  }

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8">
        {renderSection()}
      </div>

      <div className="col-span-4">
        <SimulationSummary />
      </div>
    </div>
  );

}