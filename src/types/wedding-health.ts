export interface WeddingHealth {

  score: number;

  level:
    | "EXCELLENT"
    | "GOOD"
    | "WARNING"
    | "DANGER";
  
  status:
    | "SAFE"
    | "WARNING"
    | "OVER_BUDGET";

  foodPercentage: number;

  venuePercentage: number;

  vendorPercentage: number;

  traditionPercentage: number;

}