import type { MealPackage } from "@/types/scenario";

/**
 * Shared meal catalog (pure data, UI-agnostic).
 *
 * Single source of truth for catering packages (price per
 * guest), reused by the Meal builder section and the AI Smart
 * Planner's Package Selection Engine.
 */
export interface MealCatalogItem {
  value: Exclude<MealPackage, "Custom" | "">;
  title: string;
  description: string;
  price: number;
}

export const mealCatalog: MealCatalogItem[] = [
  {
    value: "Economy",
    title: "Economy",
    description: "Basic catering menu",
    price: 35000,
  },
  {
    value: "Standard",
    title: "Standard",
    description: "Balanced catering menu",
    price: 45000,
  },
  {
    value: "Premium",
    title: "Premium",
    description: "Premium catering menu",
    price: 60000,
  },
  {
    value: "Luxury",
    title: "Luxury",
    description: "Luxury catering menu",
    price: 85000,
  },
];
