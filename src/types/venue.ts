export type VenueType =
  | "Building"
  | "Hotel"
  | "Garden"
  | "Home"
  | "Outdoor";

export interface VenueConfiguration {
  venueType: VenueType | "";
  estimatedCost: number;
  capacity: number;
  location: string;
  facilities: string[];
}