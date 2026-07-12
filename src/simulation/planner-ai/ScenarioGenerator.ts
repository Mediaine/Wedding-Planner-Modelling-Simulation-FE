import type { WeddingScenario } from "@/types/scenario";
import type {
  PackageSelectionResult,
  PlannerRequirement,
} from "@/types/smart-planner";

/**
 * ============================================================
 * Scenario Generator (Sprint 18, Step 8)
 * ============================================================
 *
 * Assembles a complete WeddingScenario from the normalized
 * requirement and the packages chosen by the Package Selection
 * Engine. The result is shaped exactly like a manually built
 * scenario, so it flows through the existing Simulation Engine
 * unchanged and can be loaded into the (editable) Builder.
 *
 * The generated scenario is guaranteed constraint-valid as long
 * as the requirement carries a positive budget: a venue is
 * always selected, at least one vendor is present, and the meal
 * price comes from the catalog (>= constraint floor).
 */
export class ScenarioGenerator {

  static generate(
    requirement: PlannerRequirement,
    selection: PackageSelectionResult,
  ): WeddingScenario {

    return {

      basic: {
        scenarioName:
          ScenarioGenerator.buildName(requirement.city),
        budget: requirement.budget,
        concept: requirement.concept,
        style: requirement.style,
        weddingDate: "",
        province: requirement.province,
        city: requirement.city,
      },

      guest: {
        invitation:
          Math.max(1, Math.round(requirement.guestCount / 2)),
        estimatedAttendance: requirement.guestCount,
        seating: "Seated",
        meal: "Dinner",
        mealPackage: selection.meal.package,
        mealPrice: selection.meal.pricePerGuest,
      },

      venue: {
        venueType: selection.venue.venueType,
        estimatedCost: selection.venue.cost,
        capacity: 0,
        location: requirement.city,
        facilities: [],
        decorationPackage: selection.decoration.package,
        decorationCost: selection.decoration.cost,
      },

      vendor: {
        selectedPackages: selection.vendor.selectedPackages,
      },

      tradition: {
        traditionType: selection.tradition.traditionType,
        packagePrice: selection.tradition.packagePrice,
        maharPackage: selection.tradition.maharPackage,
        mahar: selection.tradition.mahar,
        seserahanPackage: selection.tradition.seserahanPackage,
        seserahan: selection.tradition.seserahan,
      },

    };

  }

  private static buildName(
    city: string,
  ): string {

    const trimmed = city.trim();

    return trimmed
      ? `AI Smart Plan – ${trimmed}`
      : "AI Smart Plan";

  }

}
