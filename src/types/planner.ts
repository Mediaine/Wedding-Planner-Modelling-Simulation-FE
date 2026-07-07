import type { VenueType } from "./venue";

export interface PlannerPreset {
  id: string;
  name: string;
  minBudget: number;
  maxBudget: number;
  guestInvitation: number;
  venueType: VenueType;
  venueCost: number;
  mahar: number;
  seserahan: number;
}