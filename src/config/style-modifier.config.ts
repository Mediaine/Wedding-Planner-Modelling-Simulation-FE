import type { StyleModifierRule } from "@/types/smart-planner";

/**
 * ============================================================
 * Wedding Style Modifier Configuration (Sprint 18, Step 3)
 * ============================================================
 *
 * Wedding style reshapes planning priority. Rules are configured
 * here (not hard-coded in the engine) so priority behaviour can
 * be tuned per style without touching logic.
 *
 * Spec mapping:
 *   Modern      -> Tradition Optional
 *   Traditional -> Tradition Critical
 *   Luxury      -> Decoration Critical
 *   Simple      -> Decoration Medium
 *
 * The domain has no "Simple" WeddingStyle; "Rustic" is the
 * understated / simple analog and carries that rule. Styles with
 * an empty override list leave the base priority matrix intact.
 */
export const styleModifierRules: StyleModifierRule[] = [

  {
    style: "Modern",
    overrides: [
      { category: "Tradition", priority: "Optional" },
    ],
  },

  {
    style: "Traditional",
    overrides: [
      { category: "Tradition", priority: "Critical" },
    ],
  },

  {
    style: "Luxury",
    overrides: [
      { category: "Decoration", priority: "Critical" },
    ],
  },

  {
    style: "Rustic",
    overrides: [
      { category: "Decoration", priority: "Medium" },
    ],
  },

  {
    style: "Garden",
    overrides: [],
  },

  {
    style: "Outdoor",
    overrides: [],
  },

];
