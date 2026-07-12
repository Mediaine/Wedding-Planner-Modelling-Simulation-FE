import type { DecorationPackage } from "@/types/venue";

/**
 * Shared decoration catalog (pure data, UI-agnostic).
 *
 * Single source of truth for predefined decoration packages,
 * reused by the Decoration builder section and the AI Smart
 * Planner's Package Selection Engine.
 */
export interface DecorationCatalogItem {
  value: Exclude<DecorationPackage, "Custom" | "">;
  title: string;
  description: string;
  cost: number;
}

export const decorationCatalog: DecorationCatalogItem[] = [
  {
    value: "Simple",
    title: "Simple Decoration",
    description: "Minimalist essentials",
    cost: 7500000,
  },
  {
    value: "Classic",
    title: "Classic Decoration",
    description: "Elegant standard setup",
    cost: 15000000,
  },
  {
    value: "Luxury",
    title: "Luxury Decoration",
    description: "Premium floral & stage",
    cost: 30000000,
  },
  {
    value: "Royal",
    title: "Royal Decoration",
    description: "Grand signature design",
    cost: 50000000,
  },
];
