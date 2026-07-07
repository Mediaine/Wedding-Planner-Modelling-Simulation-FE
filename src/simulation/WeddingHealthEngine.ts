import type { WeddingCalculation } from "@/types/wedding-engine";
import type { WeddingHealth } from "@/types/wedding-health";

export class WeddingHealthEngine {

  static calculate(

    calculation: WeddingCalculation,

  ): WeddingHealth {

    const total =
      calculation.totalCost || 1;

    const foodPercentage =
      Math.round(calculation.foodCost / total * 100);

    const venuePercentage =
      Math.round(calculation.venueCost / total * 100);

    const vendorPercentage =
      Math.round(calculation.vendorCost / total * 100);

    const traditionPercentage =
      Math.round(calculation.traditionCost / total * 100);

    let score = 100;

    if (calculation.budgetUsage > 80)
      score -= 10;

    if (calculation.budgetUsage > 90)
      score -= 15;

    if (calculation.budgetUsage > 100)
      score -= 30;

    if (foodPercentage > 60)
      score -= 5;

    if (venuePercentage > 40)
      score -= 5;

    score = Math.max(0, score);

    let level:
      | "EXCELLENT"
      | "GOOD"
      | "WARNING"
      | "DANGER";

    if (score >= 90)
      level = "EXCELLENT";
    else if (score >= 75)
      level = "GOOD";
    else if (score >= 50)
      level = "WARNING";
    else
      level = "DANGER";

    return {

      score,

      level,

      foodPercentage,

      venuePercentage,

      vendorPercentage,

      traditionPercentage,

    };

  }

}