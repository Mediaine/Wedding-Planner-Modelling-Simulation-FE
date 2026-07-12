import {
  CheckCircle2,
  Gauge,
  HeartPulse,
  Lightbulb,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { vendors } from "@/features/scenario-builder/components/sections/VendorConfiguration/vendor.data";
import { traditionPackages } from "@/features/scenario-builder/components/sections/TraditionConfiguration/tradition.data";
import type {
  ConfidenceLevel,
  GeneratedPlan,
} from "@/types/smart-planner";

interface Props {
  plan: GeneratedPlan;
  onSelect: (plan: GeneratedPlan) => void;
}

function money(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

const vendorNameById: Record<string, string> =
  Object.fromEntries(vendors.map((v) => [v.id, v.name]));

const levelClass: Record<ConfidenceLevel, string> = {
  "Very High":
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  High:
    "bg-green-500/10 text-green-600 dark:text-green-400",
  Medium:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Low:
    "bg-red-500/10 text-red-600 dark:text-red-400",
};

function SelectionRow({
  label,
  values,
}: {
  label: string;
  values: string[];
}) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-semibold text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {values.map((value) => (
          <span
            key={value}
            className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PlanCard({
  plan,
  onSelect,
}: Props) {

  const { scenario } = plan;

  const c = plan.result.calculation;

  const topRecommendation = plan.recommendations[0];

  const attendance = scenario.guest.estimatedAttendance;

  const vendorNames = Object.values(scenario.vendor.selectedPackages).map(
    (v) => vendorNameById[v.vendorId] ?? v.packageName,
  );

  const hasMaharSeserahan =
    scenario.tradition.mahar > 0 || scenario.tradition.seserahan > 0;

  const traditionValues =
    scenario.tradition.traditionType
      ? [
          `Adat ${scenario.tradition.traditionType}`,
          "Mahar",
          "Seserahan",
        ]
      : hasMaharSeserahan
        ? ["Mahar", "Seserahan"]
        : ["Dilewati"];

  // An ethnic adat is not auto-selected. Hint when the leftover
  // budget could still cover one (cheapest adat package).
  const cheapestAdat =
    Math.min(...traditionPackages.map((t) => t.price));

  const canAddAdat =
    !scenario.tradition.traditionType &&
    c.remainingBudget >= cheapestAdat;

  return (
    <div className="flex flex-col rounded-2xl border p-6 transition-all hover:border-primary">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">
            {plan.objective.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {plan.objective.goal}
          </p>
        </div>

        <div
          className={`rounded-full px-3 py-1 text-center text-xs font-semibold ${levelClass[plan.confidence.level]}`}
        >
          {plan.confidence.score}%
          <div className="text-[10px] font-medium opacity-80">
            {plan.confidence.level}
          </div>
        </div>
      </div>

      {/* Selections */}
      <div className="mt-5 space-y-3 rounded-xl border p-4">
        <SelectionRow
          label="Guest & Food"
          values={[
            `${attendance.toLocaleString("id-ID")} Tamu`,
            `Paket ${scenario.guest.mealPackage || "-"}`,
          ]}
        />
        <SelectionRow
          label="Venue & Decoration"
          values={[
            `${scenario.venue.venueType || "-"} Venue`,
            scenario.venue.decorationPackage
              ? `${scenario.venue.decorationPackage} Decoration`
              : "Dekorasi Default",
          ]}
        />
        <SelectionRow
          label="Vendor"
          values={vendorNames.length ? vendorNames : ["-"]}
        />
        <SelectionRow
          label="Tradition"
          values={traditionValues}
        />

        {canAddAdat && (
          <p className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
            <Lightbulb size={13} className="mt-0.5 shrink-0 text-amber-500" />
            <span>
              Sisa anggaran masih cukup untuk menambah upacara adat jika diinginkan.
            </span>
          </p>
        )}
      </div>

      {/* Budget + health */}
      <div className="mt-4 space-y-2 rounded-xl border p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Wallet size={14} /> Estimasi Biaya
          </span>
          <strong>{money(c.totalCost)}</strong>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Wallet size={14} /> Sisa Biaya
          </span>
          <strong
            className={
              c.remainingBudget < 0
                ? "text-red-600 dark:text-red-400"
                : "text-emerald-600 dark:text-emerald-400"
            }
          >
            {money(c.remainingBudget)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <HeartPulse size={14} /> Health Score
          </span>
          <strong>{plan.result.health.score} / 100</strong>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Gauge size={14} /> Confidence Score
          </span>
          <strong>
            {plan.confidence.score} / 100
            <span className="ml-1 font-normal text-muted-foreground">
              ({plan.confidence.level})
            </span>
          </strong>
        </div>
      </div>

      {/* Recommendation */}
      {topRecommendation && (
        <div className="mt-4 flex items-start gap-2 rounded-xl border p-3 text-sm">
          <Lightbulb
            size={16}
            className="mt-0.5 shrink-0 text-amber-500"
          />
          <div>
            <p className="font-medium">{topRecommendation.title}</p>
            <p className="text-xs text-muted-foreground">
              {topRecommendation.message}
            </p>
          </div>
        </div>
      )}

      {/* Reasoning (Explainable AI) */}
      <div className="mt-4 space-y-1.5">
        <p className="text-xs font-semibold text-muted-foreground">
          Kenapa rencana ini
        </p>
        {plan.confidence.reasons.slice(0, 3).map((reason) => (
          <div
            key={reason}
            className="flex items-start gap-1.5 text-xs text-muted-foreground"
          >
            <CheckCircle2
              size={13}
              className="mt-0.5 shrink-0 text-primary"
            />
            <span>{reason}</span>
          </div>
        ))}
      </div>

      <Button
        className="mt-6 w-full"
        onClick={() => onSelect(plan)}
      >
        Gunakan Rencana Ini
      </Button>

    </div>
  );
}
