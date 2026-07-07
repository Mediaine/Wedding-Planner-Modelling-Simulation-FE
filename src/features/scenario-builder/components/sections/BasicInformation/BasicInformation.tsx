import BudgetConfiguration from "./BudgetConfiguration";
import WeddingConcept from "./WeddingConcept";
// import WeddingStyle from "./WeddingStyle";

export default function BasicInformation() {
  return (
    <div className="space-y-8">

      <BudgetConfiguration />

      <WeddingConcept />

      {/* <WeddingStyle /> */}

    </div>
  );
}