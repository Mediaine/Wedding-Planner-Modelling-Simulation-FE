// src/features/scenario-builder/constants/builder-steps.ts

export const BUILDER_STEPS = [
  "Basic",
  "Guest",
  "Venue",
  "Vendor",
  "Tradition",
  "Review",
] as const;

export const TOTAL_BUILDER_STEPS =
  BUILDER_STEPS.length;