import type {
  MealPackage,
  WeddingConcept,
  WeddingScenario,
  WeddingStyle,
} from "./scenario";
import type { ScenarioResult } from "./scenario-result";
import type { WeddingTimeline } from "./timeline";
import type { Recommendation } from "./recommendation";
import type { WeddingInsight } from "./wedding-insight";
import type { WeddingCalculation } from "./wedding-engine";
import type { WeddingHealth } from "./wedding-health";
import type { ConstraintResult } from "./constraint";
import type {
  DecorationPackage,
  VenueType,
} from "./venue";
import type {
  TraditionTier,
  TraditionType,
} from "./tradition";
import type { SelectedVendorPackage } from "./vendor";

/**
 * ============================================================
 * AI Smart Planner — Requirement Contracts (Sprint 18, Step 1)
 * ============================================================
 *
 * These are the only inputs the user provides in the AI Smart
 * Planner workflow. Everything else (venue, decoration, vendor,
 * tradition, timeline) is generated deterministically downstream.
 *
 * Existing domain unions (WeddingConcept / WeddingStyle) are
 * reused — never redefined — to stay aligned with the Scenario
 * Builder and Simulation Engine.
 */

/**
 * Raw input coming from the AI Smart Planner form, before
 * normalization. Values may be unclean (untrimmed city,
 * fractional / negative numbers, etc.).
 */
export interface PlannerInput {
  budget: number;
  guestCount: number;
  province: string;
  city: string;
  concept: WeddingConcept;
  style: WeddingStyle;
}

/**
 * Canonical, normalized requirement produced by the
 * RequirementAnalyzer and consumed by every downstream planning
 * engine (Budget Grade, Style Modifier, Priority Matrix, ...).
 */
export interface PlannerRequirement {
  budget: number;
  guestCount: number;
  province: string;
  city: string;
  concept: WeddingConcept;
  style: WeddingStyle;
}

/**
 * ============================================================
 * Budget Grade (Sprint 18, Step 2)
 * ============================================================
 *
 * Wedding budget class derived from the budget. Grades are the
 * backbone of downstream threshold allocation and package
 * selection.
 */
export type BudgetGrade =
  | "ECONOMY"
  | "STANDARD"
  | "PLUS"
  | "PREMIUM"
  | "LUXURY";

/**
 * A configurable budget-grade band. `maxBudget` is inclusive;
 * the top band uses Number.MAX_SAFE_INTEGER as an open ceiling
 * (same convention as the existing planner presets).
 */
export interface BudgetGradeBand {
  grade: BudgetGrade;
  label: string;
  minBudget: number;
  maxBudget: number;
}

/**
 * ============================================================
 * Planning Priority (Sprint 18, Steps 3 & 4)
 * ============================================================
 *
 * Planning categories carry a priority level that governs how
 * budget is allocated and how fallback is applied. Note that
 * Decoration is a first-class planning category here even though
 * the Simulation Engine folds decoration cost into venue cost.
 */
export type PlanningCategory =
  | "Food"
  | "Venue"
  | "Decoration"
  | "Vendor"
  | "Tradition";

export type PriorityLevel =
  | "Critical"
  | "High"
  | "Medium"
  | "Optional";

/**
 * A single category priority override emitted by the Wedding
 * Style Modifier (Step 3) and applied by the Priority Matrix
 * Engine (Step 4).
 */
export interface PriorityOverride {
  category: PlanningCategory;
  priority: PriorityLevel;
}

/**
 * Configurable rule: how a given wedding style reshapes planning
 * priority. A style with no overrides leaves the base matrix
 * untouched.
 */
export interface StyleModifierRule {
  style: WeddingStyle;
  overrides: PriorityOverride[];
}

/**
 * Final priority for every planning category, produced by the
 * Priority Matrix Engine (Step 4) = base matrix + style overrides.
 */
export type CategoryPriority = Record<PlanningCategory, PriorityLevel>;

/**
 * ============================================================
 * Threshold Allocation (Sprint 18, Step 5)
 * ============================================================
 *
 * Recommended budget split per grade. Buckets mirror the
 * Simulation Engine's cost model (venue cost already includes
 * decoration), so Venue here covers Venue + Decoration.
 *
 * The same shape carries both percentages (0-100) and computed
 * IDR amounts.
 */
export interface AllocationBreakdown {
  food: number;
  venue: number;
  vendor: number;
  tradition: number;
}

/**
 * Resolved threshold allocation for a specific budget. Threshold
 * is a recommendation only — later engines may reallocate.
 */
export interface ThresholdAllocation {
  grade: BudgetGrade;
  budget: number;
  percentages: AllocationBreakdown;
  amounts: AllocationBreakdown;
}

/**
 * ============================================================
 * Fallback Strategy (Sprint 18, Step 6)
 * ============================================================
 *
 * When a category cannot fit its allocation, these ordered
 * actions describe how to recover — downgrade, use a default,
 * remove non-essential items, or skip entirely.
 */
export type FallbackAction =
  | "REDUCE_MEAL_PRICE"
  | "CHOOSE_CHEAPER_VENUE"
  | "DOWNGRADE_DECORATION"
  | "USE_VENUE_DEFAULT_DECORATION"
  | "DOWNGRADE_VENDOR_PACKAGE"
  | "REMOVE_NON_ESSENTIAL_VENDOR"
  | "SKIP_TRADITION"
  | "REALLOCATE_REMAINING";

/**
 * Resolved fallback strategy for a single category. `removable`
 * reflects the resolved priority (only Optional categories may be
 * skipped entirely — Critical categories like Food are never
 * removed).
 */
export interface FallbackStrategy {
  category: PlanningCategory;
  priority: PriorityLevel;
  removable: boolean;
  actions: FallbackAction[];
}

/**
 * Fallback strategy for every planning category.
 */
export type FallbackStrategyMap = Record<PlanningCategory, FallbackStrategy>;

/**
 * ============================================================
 * Package Selection (Sprint 18, Step 7)
 * ============================================================
 *
 * Deterministic selection of concrete packages per category,
 * respecting priority, threshold allocation, budget and package
 * cost. Selection shapes align with the WeddingScenario so the
 * Scenario Generator (Step 8) can map them directly.
 */
export interface MealSelection {
  package: MealPackage;
  pricePerGuest: number;
  totalCost: number;
}

export interface VenueSelection {
  venueType: VenueType;
  cost: number;
}

export interface DecorationSelection {
  package: DecorationPackage;
  cost: number;
}

export interface VendorSelection {
  selectedPackages: Record<string, SelectedVendorPackage>;
  totalCost: number;
}

export interface TraditionSelection {
  traditionType: TraditionType;
  packagePrice: number;
  maharPackage: TraditionTier;
  mahar: number;
  seserahanPackage: TraditionTier;
  seserahan: number;
  totalCost: number;
  skipped: boolean;
}

/**
 * A single explainable selection decision (Explainable AI seed).
 */
export interface SelectionReason {
  category: PlanningCategory;
  decision: string;
  reason: string;
}

/**
 * Full output of the Package Selection Engine.
 */
export interface PackageSelectionResult {
  meal: MealSelection;
  venue: VenueSelection;
  decoration: DecorationSelection;
  vendor: VendorSelection;
  tradition: TraditionSelection;
  totalCost: number;
  reasons: SelectionReason[];
}

/**
 * Inputs required to run package selection.
 */
export interface PackageSelectionInput {
  requirement: PlannerRequirement;
  allocation: ThresholdAllocation;
  priority: CategoryPriority;
  fallback: FallbackStrategyMap;
}

/**
 * ============================================================
 * Confidence Score (Sprint 18, Step 13)
 * ============================================================
 *
 * A deterministic, weighted measure of how well a generated plan
 * satisfies the planning rules. Never random.
 */
export type ConfidenceLevel =
  | "Very High"
  | "High"
  | "Medium"
  | "Low";

/** Weights for the five confidence criteria (must sum to 1). */
export interface ConfidenceWeights {
  budgetFit: number;
  thresholdCompliance: number;
  prioritySatisfaction: number;
  constraintValidation: number;
  weddingHealth: number;
}

/** Individual criterion sub-scores (each 0-100, pre-weight). */
export interface ConfidenceBreakdown {
  budgetFit: number;
  thresholdCompliance: number;
  prioritySatisfaction: number;
  constraintValidation: number;
  weddingHealth: number;
}

export interface ConfidenceScore {
  score: number;
  level: ConfidenceLevel;
  breakdown: ConfidenceBreakdown;
  reasons: string[];
}

/** Inputs required to compute a confidence score. */
export interface ConfidenceInput {
  scenario: WeddingScenario;
  calculation: WeddingCalculation;
  health: WeddingHealth;
  constraint: ConstraintResult;
  allocation: ThresholdAllocation;
  priority: CategoryPriority;
}

/**
 * ============================================================
 * Planner Pipeline (Sprint 18, Step 9)
 * ============================================================
 *
 * Full deterministic planning trace plus the simulation output
 * produced by reusing the existing ScenarioSimulationEngine.
 * Intermediate stages are retained so later steps (Confidence,
 * Explainability, Plan Comparison) can reason over them.
 */
export interface PlannerPipelineResult {
  requirement: PlannerRequirement;
  grade: BudgetGrade;
  priority: CategoryPriority;
  allocation: ThresholdAllocation;
  selection: PackageSelectionResult;
  scenario: WeddingScenario;
  result: ScenarioResult;
  timeline: WeddingTimeline;
  recommendations: Recommendation[];
  insights: WeddingInsight[];
  confidence: ConfidenceScore;
}

/**
 * ============================================================
 * Plan Generation (Sprint 18 — Multiple Plan Generation)
 * ============================================================
 *
 * Each objective produces one alternative plan. `budgetFactor`
 * is the share of the real budget the planner targets, which
 * deterministically differentiates the plans (e.g. Budget Saver
 * targets less and keeps more remaining).
 */
export interface PlanObjective {
  id: string;
  name: string;
  goal: string;
  budgetFactor: number;
}

/**
 * A full pipeline result labelled with the objective that
 * produced it — the unit shown in the plan comparison UI.
 */
export interface GeneratedPlan extends PlannerPipelineResult {
  objective: PlanObjective;
}
