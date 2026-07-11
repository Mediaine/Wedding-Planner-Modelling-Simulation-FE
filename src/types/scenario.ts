import type { VenueConfiguration } from "./venue";
import type { VendorConfiguration } from "./vendor";
import type { TraditionConfiguration } from "./tradition";

export type WeddingConcept =
  | "DIY"
  | "Hybrid"
  | "Full Package";

export type WeddingStyle =
  | "Modern"
  | "Traditional"
  | "Luxury"
  | "Garden"
  | "Outdoor"
  | "Rustic";

export interface ScenarioBasic {
  scenarioName: string;
  budget: number;
  concept: WeddingConcept;
  style: WeddingStyle;
  weddingDate: string;
  province: string;
  city: string;
}

export type MealPackage =
  | "Economy"
  | "Standard"
  | "Premium"
  | "Luxury"
  | "Custom"
  | "";

export interface GuestConfiguration {
  invitation: number;
  estimatedAttendance: number;
  seating: "Standing" | "Seated";
  meal: "Lunch" | "Dinner";
  mealPackage: MealPackage;
  mealPrice: number;
}

export interface WeddingScenario {
  basic: ScenarioBasic;
  guest: GuestConfiguration;
  venue: VenueConfiguration;
  vendor: VendorConfiguration;
  tradition: TraditionConfiguration;
}

