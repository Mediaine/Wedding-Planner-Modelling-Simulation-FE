import type { WeddingScenario } from "@/types/scenario";
import type { PlannerPreset } from "@/types/planner";

import { plannerPresets } from "./presets/planner-presets";

export class PlannerPresetEngine {

  static findPreset(
    budget: number,
  ): PlannerPreset {

    const preset =
      plannerPresets.find(

        p =>
          budget >= p.minBudget &&
          budget <= p.maxBudget,

      );

    if (!preset) {

      throw new Error(
        "Planner preset not found.",
      );

    }

    return preset;

  }

  static apply(
    budget: number,
    scenario: WeddingScenario,
  ): WeddingScenario {

    const preset =
      this.findPreset(budget);

    return {

      ...scenario,

      guest: {

        ...scenario.guest,

        invitation:
          preset.guestInvitation,

      },

      venue: {

        ...scenario.venue,

        venueType:
          preset.venueType,

        estimatedCost:
          preset.venueCost,

      },

      tradition: {

        ...scenario.tradition,

        mahar:
          preset.mahar,

        seserahan:
          preset.seserahan,

      },

    };

  }

}