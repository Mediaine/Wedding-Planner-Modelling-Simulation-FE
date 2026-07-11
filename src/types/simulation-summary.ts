import type { Recommendation } from "./recommendation";
import type { WeddingHealth } from "./wedding-health";
import type { BudgetAllocation } from "./budget-allocation";
import type { WeddingInsight } from "./wedding-insight";

export interface SimulationSummary {

  budget:number;

  estimatedCost:number;

  remainingBudget:number;

  invitation:number;

  attendance:number;

  meal:string;

  seating:string;

  concept:string;

  style:string;

  vendorCount:number;

  venue:string;

  health: WeddingHealth;

  recommendations: Recommendation[];

  allocation: BudgetAllocation;

  insights: WeddingInsight[];

  foodCost: number;

  traditionType: string;

  traditionPackage: number;

  mahar: number;

  seserahan: number;

  traditionCost: number;

  venueCost:number;

  decorationCost:number;

  vendorCost:number;

}