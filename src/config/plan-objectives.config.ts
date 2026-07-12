import type { PlanObjective } from "@/types/smart-planner";

/**
 * ============================================================
 * Plan Objectives Configuration (Sprint 18 — Plan Labels)
 * ============================================================
 *
 * The three planning alternatives. `budgetFactor` = the share of
 * the real budget the planner targets when selecting packages;
 * the generated scenario always records the real budget, so a
 * lower factor simply leaves more remaining budget.
 *
 *   Plan A — Balanced          : optimise wedding health
 *   Plan B — Budget Saver      : maximise remaining budget
 *   Plan C — Premium Experience: maximise guest experience
 */
export const planObjectives: PlanObjective[] = [
  {
    id: "balanced",
    name: "Balanced",
    goal: "Optimize Wedding Health",
    budgetFactor: 0.95,
  },
  {
    id: "budget-saver",
    name: "Budget Saver",
    goal: "Maximize Remaining Budget",
    budgetFactor: 0.75,
  },
  {
    id: "premium",
    name: "Premium Experience",
    goal: "Maximize Guest Experience",
    budgetFactor: 1,
  },
];
