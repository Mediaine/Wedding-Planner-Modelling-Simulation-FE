import type { CategoryPriority } from "@/types/smart-planner";

/**
 * ============================================================
 * Base Priority Matrix Configuration (Sprint 18, Step 4)
 * ============================================================
 *
 * Default priority for every planning category, before the
 * Wedding Style Modifier (Step 3) is applied. Configured here so
 * priorities can be tuned without touching engine logic.
 *
 * Spec defaults:
 *   Food       -> Critical
 *   Venue      -> Critical
 *   Decoration -> High
 *   Vendor     -> Medium
 *   Tradition  -> Optional
 */
export const basePriorityMatrix: CategoryPriority = {
  Food: "Critical",
  Venue: "Critical",
  Decoration: "High",
  Vendor: "Medium",
  Tradition: "Optional",
};
