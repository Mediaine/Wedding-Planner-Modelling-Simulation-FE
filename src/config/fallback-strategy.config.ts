import type {
  FallbackAction,
  PlanningCategory,
} from "@/types/smart-planner";

/**
 * ============================================================
 * Fallback Strategy Configuration (Sprint 18, Step 6)
 * ============================================================
 *
 * Ordered fallback actions per category, applied in sequence
 * when a category exceeds its allocation. Configured here so the
 * recovery order can be tuned without touching engine logic.
 *
 * Spec mapping:
 *   Food       -> Reduce meal price (never removed)
 *   Venue      -> Choose cheaper venue
 *   Decoration -> Downgrade package, then use venue default
 *   Vendor     -> Downgrade package, then remove non-essential
 *   Tradition  -> Skip, then reallocate remaining budget
 */
export const fallbackActionConfig: Record<PlanningCategory, FallbackAction[]> = {

  Food: [
    "REDUCE_MEAL_PRICE",
  ],

  Venue: [
    "CHOOSE_CHEAPER_VENUE",
  ],

  Decoration: [
    "DOWNGRADE_DECORATION",
    "USE_VENUE_DEFAULT_DECORATION",
  ],

  Vendor: [
    "DOWNGRADE_VENDOR_PACKAGE",
    "REMOVE_NON_ESSENTIAL_VENDOR",
  ],

  Tradition: [
    "SKIP_TRADITION",
    "REALLOCATE_REMAINING",
  ],

};
