export type TimelineCategory =
  | "Preparation"
  | "Ceremony"
  | "Tradition"
  | "Reception"
  | "Closing";

/**
 * A single moment in the generated wedding timeline.
 * Times are stored as "HH:mm" strings (24h).
 */
export interface TimelineItem {
  id: string;
  title: string;
  category: TimelineCategory;
  startTime: string;
  endTime: string;
  duration: number;
  description: string;
  icon: string;
}

/**
 * The fully generated wedding timeline (simulation output).
 */
export interface WeddingTimeline {
  items: TimelineItem[];
  startTime: string;
  endTime: string;
  totalDuration: number;
}

/**
 * Rule-level definition of a timeline moment, before start/end
 * times are computed by the TimelineBuilder.
 */
export interface TimelineStep {
  title: string;
  category: TimelineCategory;
  duration: number;
  description: string;
  icon: string;
}
