export interface WeddingHealth {

  score: number;

  level:
    | "EXCELLENT"
    | "GOOD"
    | "WARNING"
    | "DANGER";

  foodPercentage: number;

  venuePercentage: number;

  vendorPercentage: number;

  traditionPercentage: number;

}