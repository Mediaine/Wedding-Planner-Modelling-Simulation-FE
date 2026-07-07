import AppCard from "@/components/common/AppCard";
import PageTitle from "@/components/common/PageTitle";

import BuilderContent from "./components/BuilderContent";
import BuilderFooter from "./components/BuilderFooter";
import BuilderHeader from "./components/BuilderHeader";
import BuilderStepper from "./components/BuilderStepper";

export default function ScenarioBuilderPage() {
  return (
    <div className="space-y-8">

      <PageTitle
        title="Scenario Builder"
        description="Create and configure your wedding scenario."
      />

      <AppCard className="space-y-8">

        <BuilderHeader />

        <BuilderStepper />

        <BuilderContent />

        <BuilderFooter />

      </AppCard>

    </div>
  );
}