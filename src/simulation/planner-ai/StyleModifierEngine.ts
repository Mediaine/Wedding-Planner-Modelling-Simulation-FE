import type { WeddingStyle } from "@/types/scenario";
import type { PriorityOverride } from "@/types/smart-planner";

import { styleModifierRules } from "@/config/style-modifier.config";

/**
 * ============================================================
 * Wedding Style Modifier (Sprint 18, Step 3)
 * ============================================================
 *
 * Resolves the set of priority overrides implied by a wedding
 * style, using the configurable `style-modifier.config`. The
 * Priority Matrix Engine (Step 4) applies these overrides on top
 * of the base priority matrix.
 *
 * Deterministic, rule-based lookup — no decisions beyond mapping
 * a style to its configured overrides.
 */
export class StyleModifierEngine {

  static resolve(
    style: WeddingStyle,
  ): PriorityOverride[] {

    const rule =
      styleModifierRules.find(
        (r) => r.style === style,
      );

    // Return a copy so downstream engines can't mutate config.
    return rule
      ? [...rule.overrides]
      : [];

  }

}
