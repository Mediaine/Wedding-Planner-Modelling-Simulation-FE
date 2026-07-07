import type { WeddingCalculation } from "@/types/wedding-engine";
import type { WeddingScenario } from "@/types/scenario";
import type { WeddingInsight } from "@/types/wedding-insight";

export class WeddingInsightEngine {

    static generate(

        calculation: WeddingCalculation,

        scenario: WeddingScenario,

    ): WeddingInsight[] {

        const insights: WeddingInsight[] = [];

        if (calculation.remainingBudget > 15000000) {

            insights.push({

                title: "Budget Sangat Aman",

                message:
                    "Masih tersedia buffer lebih dari Rp15 juta. Pertimbangkan meningkatkan kualitas fotografi, dekorasi, atau entertainment.",

                priority: "LOW",

            });

        }

        if (calculation.remainingBudget < 5000000) {

            insights.push({

                title: "Buffer Tipis",

                message:
                    "Cadangan anggaran kurang dari Rp5 juta. Sebaiknya hindari menambah vendor baru.",

                priority: "HIGH",

            });

        }

        if (
            calculation.foodCost >
            calculation.budget * 0.55
        ) {

            insights.push({

                title: "Konsumsi Mendominasi",

                message:
                    "Biaya konsumsi melebihi 55% dari total budget. Evaluasi jumlah tamu atau harga paket catering.",

                priority: "HIGH",

            });

        }

        if (
            scenario.guest.invitation > 800 &&
            calculation.budget < 100000000
        ) {

            insights.push({

                title: "Jumlah Tamu Tinggi",

                message:
                    "Jumlah undangan cukup besar dibanding anggaran. Pertimbangkan mengurangi tamu atau memilih venue dengan biaya lebih efisien.",

                priority: "MEDIUM",

            });

        }

        if (
            scenario.vendor.selectedPackages &&
            Object.keys(
                scenario.vendor.selectedPackages,
            ).length <= 2
        ) {

            insights.push({

                title: "Vendor Masih Sedikit",

                message:
                    "Masih terdapat ruang anggaran untuk menambah vendor pendukung seperti photobooth, coffee corner, atau live music.",

                priority: "LOW",

            });

        }

        return insights;

    }

}