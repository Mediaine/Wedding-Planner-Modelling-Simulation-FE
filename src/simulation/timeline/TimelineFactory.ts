import type { WeddingScenario } from "@/types/scenario";
import type { WeddingTimeline } from "@/types/timeline";

import { TimelineEngine } from "./TimelineEngine";
import { TimelineBuilder } from "./TimelineBuilder";

/**
 * High-level entry point for generating a wedding timeline.
 * Combines the rule-based TimelineEngine with the time-aware
 * TimelineBuilder to produce the final simulation output.
 */
export class TimelineFactory {

  static create(
    scenario: WeddingScenario,
  ): WeddingTimeline {

    const steps =
      TimelineEngine.buildSteps(scenario);

    return new TimelineBuilder(TimelineEngine.START_TIME)
      .addAll(steps)
      .build();

  }

}
