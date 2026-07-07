import {
  Activity,
  CircleDollarSign,
  FolderOpen,
  HeartHandshake,
  Scale,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import EmptyState from "@/components/common/EmptyState";
import MetricCard from "@/components/common/MetricCard";
import PageTitle from "@/components/common/PageTitle";
import QuickActionCard from "@/components/common/QuickActionCard";
import SectionHeader from "@/components/common/SectionHeader";
import TipCard from "@/components/common/TipCard";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">

      <PageTitle
        title="Welcome Back 👋"
        description="Let's build your perfect wedding."
      />

      <div className="grid gap-6 lg:grid-cols-4">

        <MetricCard
          title="Saved Scenario"
          value="0"
          icon={FolderOpen}
        />

        <MetricCard
          title="Simulation"
          value="0"
          icon={Activity}
        />

        <MetricCard
          title="Average Budget"
          value="-"
          icon={CircleDollarSign}
        />

        <MetricCard
          title="Average Guests"
          value="-"
          icon={Users}
        />

      </div>

      <section>

        <SectionHeader
          title="Quick Action"
        />

        <div className="grid gap-6 lg:grid-cols-3">

          <QuickActionCard
            title="New Scenario"
            description="Start new wedding simulation."
            icon={HeartHandshake}
            onClick={() => navigate("/scenario-builder")}
          />

          <QuickActionCard
            title="Compare Scenario"
            description="Compare multiple wedding plans."
            icon={Scale}
            onClick={() => navigate("/scenario-comparison")}
          />

          <QuickActionCard
            title="Vendor Explorer"
            description="Browse available vendor categories."
            icon={Users}
            onClick={() => navigate("/vendors")}
          />

        </div>

      </section>

      <section>

        <SectionHeader
          title="Recent Scenario"
        />

        <EmptyState />

      </section>

      <section>

        <SectionHeader
          title="Wedding Tips"
        />

        <div className="grid gap-5 lg:grid-cols-3">

          <TipCard
            title="Keep 10% Buffer"
            description="Reserve at least 10% of your budget for unexpected costs."
          />

          <TipCard
            title="Invitation Rule"
            description="500 invitations usually mean around 1,000 guests."
          />

          <TipCard
            title="Food is Expensive"
            description="Food & beverage often consume 40–60% of the total budget."
          />

        </div>

      </section>

    </div>
  );
}