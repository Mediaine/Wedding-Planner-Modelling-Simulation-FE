import BuilderHeader from "./components/BuilderHeader";
import BuilderStepper from "./components/BuilderStepper";
import BuilderContent from "./components/BuilderContent";
import BuilderFooter from "./components/BuilderFooter";

export default function ScenarioBuilderPage() {
  return (
    <div className="space-y-8">

      <BuilderHeader />

      <BuilderStepper />

      <BuilderContent />

      <BuilderFooter />

    </div>
  );
}
