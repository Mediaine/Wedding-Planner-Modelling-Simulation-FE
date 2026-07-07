import BudgetConfiguration from "./BudgetConfiguration";
import WeddingConcept from "./WeddingConcept";
import WeddingStyle from "./WeddingStyle";
import WeddingDate from "./WeddingDate";
import WeddingLocation from "./WeddingLocation";

export default function BasicInformation() {
  return (
    <div className="space-y-8">

      <BudgetConfiguration />

      <WeddingConcept />

      <WeddingStyle />

      <WeddingDate />

      <WeddingLocation />

    </div>
  );
}