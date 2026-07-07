export interface WeddingCalculation {

  budget: number;

  foodCost: number;

  venueCost: number;

  vendorCost: number;

  traditionCost: number;

  totalCost: number;

  remainingBudget: number;

  budgetUsage: number;

  status:
    | "SAFE"
    | "WARNING"
    | "OVER_BUDGET";

}