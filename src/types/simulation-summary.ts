import type { Recommendation } from "./recommendation";
import type { WeddingHealth } from "./wedding-health";

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

  status:
    | "SAFE"
    | "WARNING"
    | "OVER_BUDGET";

  health: WeddingHealth;

  recommendations: Recommendation[];

}