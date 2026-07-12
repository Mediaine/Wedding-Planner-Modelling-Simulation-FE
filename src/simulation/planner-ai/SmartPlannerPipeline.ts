import type {
  PlannerPipelineResult,
  PlannerRequirement,
} from "@/types/smart-planner";

import { BudgetGradeEngine } from "./BudgetGradeEngine";
import { PriorityMatrixEngine } from "./PriorityMatrixEngine";
import { ThresholdAllocationEngine } from "./ThresholdAllocationEngine";
import { FallbackStrategyEngine } from "./FallbackStrategyEngine";
import { PackageSelectionEngine } from "./PackageSelectionEngine";
import { ScenarioGenerator } from "./ScenarioGenerator";

import { ScenarioSimulationEngine } from "../scenario/ScenarioSimulationEngine";

import { TimelineFactory } from "../timeline/TimelineFactory";

import { ConfidenceScoreEngine } from "./ConfidenceScoreEngine";

/**
 * ============================================================
 * Smart Planner Pipeline (Sprint 18, Step 9)
 * ============================================================
 *
 * Chains the deterministic planning engines (Steps 2-8) and
 * feeds the generated scenario into the EXISTING
 * ScenarioSimulationEngine — the simulation engine is reused,
 * never rewritten.
 *
 * Because ScenarioSimulationEngine already runs the Wedding,
 * Constraint, Budget Allocation, Wedding Health, Recommendation
 * and Insight engines, this single integration point also
 * satisfies the "reuse Recommendation / Insight" steps.
 *
 * The pipeline stays deterministic end-to-end: identical input
 * always yields an identical plan.
 */
export class SmartPlannerPipeline {

  static run(
    requirement: PlannerRequirement,
    planningBudget?: number,
  ): PlannerPipelineResult {

    // The planner may target a fraction of the real budget (used
    // to differentiate plan objectives). The generated scenario
    // always records the real budget, so remaining is accurate.
    const planBudget =
      planningBudget !== undefined && planningBudget > 0
        ? planningBudget
        : requirement.budget;

    const planningRequirement: PlannerRequirement = {
      ...requirement,
      budget: planBudget,
    };

    // Step 2 — Budget grade (from the real budget class)
    const grade =
      BudgetGradeEngine.classify(requirement.budget);

    // Steps 3-4 — Priority matrix (style modifier applied inside)
    const priority =
      PriorityMatrixEngine.resolve(requirement.style);

    // Step 5 — Threshold allocation (against the planning budget)
    const allocation =
      ThresholdAllocationEngine.resolve(
        grade,
        planBudget,
      );

    // Step 6 — Fallback strategies
    const fallback =
      FallbackStrategyEngine.resolveAll(priority);

    // Step 7 — Package selection (spends up to the planning budget)
    const selection =
      PackageSelectionEngine.select({
        requirement: planningRequirement,
        allocation,
        priority,
        fallback,
      });

    // Step 8 — Scenario generation
    const scenario =
      ScenarioGenerator.generate(requirement, selection);

    // Step 9 — Reuse the existing Simulation Engine
    const result =
      ScenarioSimulationEngine.run(scenario);

    // Step 10 — Reuse the existing Timeline Engine
    const timeline =
      TimelineFactory.create(scenario);

    // Steps 11-12 — Recommendation & Insight are produced by the
    // reused ScenarioSimulationEngine; surface them on the plan.

    // Step 13 — Confidence score for the generated plan
    const confidence =
      ConfidenceScoreEngine.calculate({
        scenario,
        calculation: result.calculation,
        health: result.health,
        constraint: result.constraint,
        allocation,
        priority,
      });

    return {
      requirement,
      grade,
      priority,
      allocation,
      selection,
      scenario,
      result,
      timeline,
      recommendations: result.recommendations,
      insights: result.insights,
      confidence,
    };

  }

}
