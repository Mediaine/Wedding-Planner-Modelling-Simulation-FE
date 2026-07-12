import type {
  TimelineItem,
  TimelineStep,
  WeddingTimeline,
} from "@/types/timeline";

import { TimelineUtils } from "./TimelineUtils";

/**
 * Turns ordered TimelineStep definitions into a fully timed
 * WeddingTimeline. The builder walks a time cursor forward,
 * assigning start/end times as each step is added.
 */
export class TimelineBuilder {

  private cursor: number;

  private readonly start: number;

  private items: TimelineItem[] = [];

  private seq = 0;

  constructor(startTime: string) {

    this.start = TimelineUtils.toMinutes(startTime);

    this.cursor = this.start;

  }

  add(step: TimelineStep): this {

    const startTime =
      TimelineUtils.toTime(this.cursor);

    const endTime =
      TimelineUtils.toTime(this.cursor + step.duration);

    this.items.push({

      id: `tl-${++this.seq}`,

      title: step.title,

      category: step.category,

      startTime,

      endTime,

      duration: step.duration,

      description: step.description,

      icon: step.icon,

    });

    this.cursor += step.duration;

    return this;

  }

  addAll(steps: TimelineStep[]): this {

    steps.forEach((step) => this.add(step));

    return this;

  }

  build(): WeddingTimeline {

    return {

      items: this.items,

      startTime: TimelineUtils.toTime(this.start),

      endTime: TimelineUtils.toTime(this.cursor),

      totalDuration: this.cursor - this.start,

    };

  }

}
