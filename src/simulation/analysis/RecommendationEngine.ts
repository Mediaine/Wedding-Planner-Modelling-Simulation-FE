import type { Recommendation } from "@/types/recommendation";
import type { WeddingCalculation } from "@/types/wedding-engine";

export class RecommendationEngine {

  static calculate(

    calculation: WeddingCalculation,

  ): Recommendation[] {

    const result: Recommendation[] = [];

    if (calculation.remainingBudget < 0) {

      result.push({

        title: "Over Budget",

        message:
          "Biaya melebihi anggaran. Kurangi venue atau vendor.",

      });

    }

    if (calculation.remainingBudget > 10000000) {

      result.push({

        title: "Budget Aman",

        message:
          "Masih tersedia buffer lebih dari Rp 10.000.000.",

      });

    }

    if (calculation.vendorCost < 5000000) {

      result.push({

        title: "Vendor",

        message:
          "Masih ada ruang untuk menambah layanan vendor.",

      });

    }

    if (calculation.foodCost > calculation.budget * 0.6) {

      result.push({

        title: "Konsumsi",

        message:
          "Biaya konsumsi sangat tinggi. Pertimbangkan menyesuaikan jumlah tamu atau harga paket.",

      });

    }

    // Tradition
    if (
        calculation.traditionCost > calculation.budget * 0.25
    ) {
        result.push({
            title:
                "Tradition Cost",
            message:
                "Traditional ceremony consumes a significant portion of your wedding budget.",
        });

    }

    return result;

  }

}