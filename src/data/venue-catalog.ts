import type { VenueType } from "@/types/venue";

/**
 * Shared venue catalog (pure data, UI-agnostic).
 *
 * Single source of truth for selectable venues, reused by the
 * Venue builder section and the AI Smart Planner's Package
 * Selection Engine. Icons live in the UI layer, not here.
 */
export interface VenueCatalogItem {
  value: Exclude<VenueType, "Custom">;
  title: string;
  description: string;
  cost: number;
}

export const venueCatalog: VenueCatalogItem[] = [
  {
    value: "Building",
    title: "Building",
    description: "Convention Hall",
    cost: 25000000,
  },
  {
    value: "Hotel",
    title: "Hotel Ballroom",
    description: "Premium Ballroom",
    cost: 45000000,
  },
  {
    value: "Garden",
    title: "Garden",
    description: "Outdoor Garden",
    cost: 30000000,
  },
  {
    value: "Home",
    title: "Private Home",
    description: "Family Residence",
    cost: 5000000,
  },
  {
    value: "Outdoor",
    title: "Outdoor",
    description: "Open Area",
    cost: 20000000,
  },
];
