import type { WeddingStyle } from "@/types/scenario";
import type { CategoryPriority } from "@/types/smart-planner";

import { basePriorityMatrix } from "@/config/priority-matrix.config";

import { StyleModifierEngine } from "./StyleModifierEngine";

/**
 * ============================================================
 * Priority Matrix Engine (Sprint 18, Step 4)
 * ============================================================
 *
 * Produces the final per-category priority by starting from the
 * configurable base matrix and applying the wedding-style
 * overrides resolved by the Style Modifier (Step 3).
 *
 * Deterministic and rule-based — the resulting matrix drives
 * threshold allocation, package selection and fallback ordering.
 */
export class PriorityMatrixEngine {

  /**
   * Final priority matrix for a given wedding style.
   */
  static resolve(
    style: WeddingStyle,
  ): CategoryPriority {

    const matrix: CategoryPriority = {
      ...basePriorityMatrix,
    };

    const overrides =
      StyleModifierEngine.resolve(style);

    overrides.forEach((override) => {
      matrix[override.category] = override.priority;
    });

    return matrix;

  }

  /**
   * Base matrix before any style override (copy).
   */
  static getBaseMatrix(): CategoryPriority {

    return {
      ...basePriorityMatrix,
    };

  }

}
