import type {
  WeddingConcept,
  WeddingStyle,
} from "@/types/scenario";

import type {
  PlannerInput,
  PlannerRequirement,
} from "@/types/smart-planner";

/**
 * ============================================================
 * Requirement Analyzer (Sprint 18, Step 1)
 * ============================================================
 *
 * First stage of the AI Smart Planner pipeline. It reads the
 * five user inputs (Budget, Guest, City, Concept, Style) and
 * normalizes them into a clean, deterministic PlannerRequirement
 * that downstream engines can rely on.
 *
 * This engine makes NO planning decisions — it only sanitizes
 * input. All decision making happens in later, rule-based
 * engines (Expert System, not LLM).
 */
export class RequirementAnalyzer {

  /** Fallbacks used only when an input is missing / invalid. */
  private static readonly DEFAULT_CONCEPT: WeddingConcept = "Hybrid";

  private static readonly DEFAULT_STYLE: WeddingStyle = "Modern";

  private static readonly VALID_CONCEPTS: WeddingConcept[] = [
    "DIY",
    "Hybrid",
    "Full Package",
  ];

  private static readonly VALID_STYLES: WeddingStyle[] = [
    "Modern",
    "Traditional",
    "Luxury",
    "Garden",
    "Outdoor",
    "Rustic",
  ];

  static analyze(
    input: PlannerInput,
  ): PlannerRequirement {

    return {

      budget:
        RequirementAnalyzer.normalizeNumber(input.budget),

      guestCount:
        RequirementAnalyzer.normalizeNumber(input.guestCount),

      province:
        RequirementAnalyzer.normalizeCity(input.province),

      city:
        RequirementAnalyzer.normalizeCity(input.city),

      concept:
        RequirementAnalyzer.normalizeConcept(input.concept),

      style:
        RequirementAnalyzer.normalizeStyle(input.style),

    };

  }

  /**
   * Non-negative, whole number. Guards against NaN and negatives
   * coming from empty / malformed number fields.
   */
  private static normalizeNumber(
    value: number,
  ): number {

    if (!Number.isFinite(value) || value < 0) {
      return 0;
    }

    return Math.round(value);

  }

  private static normalizeCity(
    value: string,
  ): string {

    return (value ?? "").trim();

  }

  private static normalizeConcept(
    value: WeddingConcept,
  ): WeddingConcept {

    return RequirementAnalyzer.VALID_CONCEPTS.includes(value)
      ? value
      : RequirementAnalyzer.DEFAULT_CONCEPT;

  }

  private static normalizeStyle(
    value: WeddingStyle,
  ): WeddingStyle {

    return RequirementAnalyzer.VALID_STYLES.includes(value)
      ? value
      : RequirementAnalyzer.DEFAULT_STYLE;

  }

}
