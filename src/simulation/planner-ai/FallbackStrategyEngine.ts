import type {
  CategoryPriority,
  FallbackStrategy,
  FallbackStrategyMap,
  PlanningCategory,
  PriorityLevel,
} from "@/types/smart-planner";

import { fallbackActionConfig } from "@/config/fallback-strategy.config";

/**
 * ============================================================
 * Fallback Strategy Engine (Sprint 18, Step 6)
 * ============================================================
 *
 * Resolves the recovery strategy for each planning category by
 * combining the configured action sequence with the category's
 * resolved priority (from the Priority Matrix Engine, Step 4).
 *
 * A category is removable/skippable only when its resolved
 * priority is Optional — so Critical categories (e.g. Food) are
 * never removed, and a style that promotes Tradition to Critical
 * automatically stops it from being skipped.
 */
export class FallbackStrategyEngine {

  static resolve(
    category: PlanningCategory,
    priority: PriorityLevel,
  ): FallbackStrategy {

    return {
      category,
      priority,
      removable: priority === "Optional",
      actions: [...fallbackActionConfig[category]],
    };

  }

  /**
   * Resolve strategies for every category from the resolved
   * priority matrix.
   */
  static resolveAll(
    matrix: CategoryPriority,
  ): FallbackStrategyMap {

    return {
      Food:
        FallbackStrategyEngine.resolve("Food", matrix.Food),
      Venue:
        FallbackStrategyEngine.resolve("Venue", matrix.Venue),
      Decoration:
        FallbackStrategyEngine.resolve("Decoration", matrix.Decoration),
      Vendor:
        FallbackStrategyEngine.resolve("Vendor", matrix.Vendor),
      Tradition:
        FallbackStrategyEngine.resolve("Tradition", matrix.Tradition),
    };

  }

}
