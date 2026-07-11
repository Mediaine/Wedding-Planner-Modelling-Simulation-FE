export type VenueType =
  | "Building"
  | "Hotel"
  | "Garden"
  | "Home"
  | "Outdoor";

export type DecorationPackage =
  | "Simple"
  | "Classic"
  | "Luxury"
  | "Royal"
  | "Custom"
  | "";

export interface VenueConfiguration {
  venueType: VenueType | "";
  estimatedCost: number;
  capacity: number;
  location: string;
  facilities: string[];
  decorationPackage: DecorationPackage;
  decorationCost: number;
}