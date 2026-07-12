import type {
  DecorationSelection,
  MealSelection,
  PackageSelectionInput,
  PackageSelectionResult,
  SelectionReason,
  TraditionSelection,
  VendorSelection,
  VenueSelection,
} from "@/types/smart-planner";
import type { SelectedVendorPackage } from "@/types/vendor";

import { venueCatalog } from "@/data/venue-catalog";
import { decorationCatalog } from "@/data/decoration-catalog";
import { mealCatalog } from "@/data/meal-catalog";
import { vendors } from "@/features/scenario-builder/components/sections/VendorConfiguration/vendor.data";
import {
  maharPackages,
  seserahanPackages,
} from "@/features/scenario-builder/components/sections/TraditionConfiguration/tradition.data";

/**
 * ============================================================
 * Package Selection Engine (Sprint 18, Step 7)
 * ============================================================
 *
 * Deterministically selects concrete packages (Meal, Venue,
 * Decoration, Vendor, Tradition) from the shared catalogs based
 * on threshold allocation, priority and package cost. Applies the
 * configured fallback strategies (downgrade / venue-default /
 * remove non-essential / skip) and never exceeds the total
 * budget. Every decision is explained.
 *
 * Reuses existing catalogs — no business data is duplicated.
 */
/**
 * Vendor selection priority — lower rank = more essential.
 * The engine covers the most important categories first (breadth)
 * so generated plans include a varied, budget-dependent set of
 * vendors instead of always the same two.
 */
const VENDOR_CATEGORY_RANK: Record<string, number> = {
  Documentation: 0,
  "Wedding Organizer": 1,
  Beauty: 2,
  "Master of Ceremony": 3,
  Entertainment: 4,
  "Food & Beverage": 5,
  "Drink & Beverage": 6,
};

export class PackageSelectionEngine {

  static select(
    input: PackageSelectionInput,
  ): PackageSelectionResult {

    const reasons: SelectionReason[] = [];

    const guestCount = input.requirement.guestCount;

    const amounts = input.allocation.amounts;

    // Food -> Meal
    const meal =
      PackageSelectionEngine.selectMeal(
        amounts.food,
        guestCount,
        reasons,
      );

    // Venue (Critical) then Decoration (High) share the venue bucket
    const venue =
      PackageSelectionEngine.selectVenue(
        amounts.venue,
        reasons,
      );

    const decoration =
      PackageSelectionEngine.selectDecoration(
        Math.max(0, amounts.venue - venue.cost),
        reasons,
      );

    // Vendor
    const vendor =
      PackageSelectionEngine.selectVendors(
        amounts.vendor,
        reasons,
      );

    // Tradition (skippable only when its resolved priority is Optional)
    const tradition =
      PackageSelectionEngine.selectTradition(
        amounts.tradition,
        input.fallback.Tradition.removable,
        reasons,
      );

    const base: PackageSelectionResult = {
      meal,
      venue,
      decoration,
      vendor,
      tradition,
      totalCost:
        meal.totalCost +
        venue.cost +
        decoration.cost +
        vendor.totalCost +
        tradition.totalCost,
      reasons,
    };

    // Spend any leftover budget on the highest-value upgrades
    // (Decoration then Meal) — "move remaining to venue / food".
    return PackageSelectionEngine.reallocateLeftover(
      base,
      input.requirement.budget,
      guestCount,
    );

  }

  /**
   * ---------------------------------------------------------
   * Meal (Food, Critical — never skipped)
   * ---------------------------------------------------------
   */
  private static selectMeal(
    foodBudget: number,
    guestCount: number,
    reasons: SelectionReason[],
  ): MealSelection {

    const perGuest =
      guestCount > 0
        ? foodBudget / guestCount
        : foodBudget;

    const affordable =
      [...mealCatalog]
        .sort((a, b) => b.price - a.price)
        .find((m) => m.price <= perGuest);

    if (affordable) {

      reasons.push({
        category: "Food",
        decision: `${affordable.title} meal`,
        reason:
          "Highest catering tier that fits the food allocation per guest.",
      });

      return {
        package: affordable.value,
        pricePerGuest: affordable.price,
        totalCost: guestCount * affordable.price,
      };

    }

    // Fallback: reduce meal price (Food is Critical, never removed).
    const cheapest =
      [...mealCatalog].sort((a, b) => a.price - b.price)[0];

    reasons.push({
      category: "Food",
      decision: `${cheapest.title} meal (reduced)`,
      reason:
        "Food allocation is tight; meal price reduced to the most economical tier. Food is never removed.",
    });

    return {
      package: cheapest.value,
      pricePerGuest: cheapest.price,
      totalCost: guestCount * cheapest.price,
    };

  }

  /**
   * ---------------------------------------------------------
   * Venue (Critical — cheaper fallback, never removed)
   * ---------------------------------------------------------
   */
  private static selectVenue(
    venueBudget: number,
    reasons: SelectionReason[],
  ): VenueSelection {

    const cheapestDecoration =
      Math.min(...decorationCatalog.map((d) => d.cost));

    const byCostDesc =
      [...venueCatalog].sort((a, b) => b.cost - a.cost);

    // Prefer the best venue that still leaves room for basic decoration.
    let chosen =
      byCostDesc.find(
        (v) => v.cost + cheapestDecoration <= venueBudget,
      );

    if (chosen) {
      reasons.push({
        category: "Venue",
        decision: chosen.title,
        reason:
          "Best venue within the venue allocation while reserving budget for decoration.",
      });
      return { venueType: chosen.value, cost: chosen.cost };
    }

    // Otherwise the best venue that at least fits the venue bucket.
    chosen = byCostDesc.find((v) => v.cost <= venueBudget);

    if (chosen) {
      reasons.push({
        category: "Venue",
        decision: chosen.title,
        reason:
          "Best venue within the venue allocation; decoration falls back to venue default.",
      });
      return { venueType: chosen.value, cost: chosen.cost };
    }

    // Fallback: choose the cheapest venue (Venue is Critical).
    const cheapest =
      [...venueCatalog].sort((a, b) => a.cost - b.cost)[0];

    reasons.push({
      category: "Venue",
      decision: `${cheapest.title} (cheaper venue)`,
      reason:
        "Venue allocation is tight; selected the most affordable venue. A venue is always required.",
    });

    return { venueType: cheapest.value, cost: cheapest.cost };

  }

  /**
   * ---------------------------------------------------------
   * Decoration (High — downgrade, else venue default)
   * ---------------------------------------------------------
   */
  private static selectDecoration(
    decorationBudget: number,
    reasons: SelectionReason[],
  ): DecorationSelection {

    const affordable =
      [...decorationCatalog]
        .sort((a, b) => b.cost - a.cost)
        .find((d) => d.cost <= decorationBudget);

    if (affordable) {
      reasons.push({
        category: "Decoration",
        decision: affordable.title,
        reason:
          "Best decoration package fitting the remaining venue allocation.",
      });
      return { package: affordable.value, cost: affordable.cost };
    }

    // Fallback: use venue default decoration (no separate cost).
    reasons.push({
      category: "Decoration",
      decision: "Venue default decoration",
      reason:
        "No decoration package fits the remaining venue allocation; using the venue's default decoration.",
    });

    return { package: "", cost: 0 };

  }

  /**
   * ---------------------------------------------------------
   * Vendor (Medium — downgrade, remove non-essential)
   * ---------------------------------------------------------
   * Essential (Documentation) vendors are considered first;
   * at least one vendor is always selected so the generated
   * scenario stays constraint-valid.
   */
  private static selectVendors(
    vendorBudget: number,
    reasons: SelectionReason[],
  ): VendorSelection {

    const rank = (category: string): number =>
      VENDOR_CATEGORY_RANK[category] ?? 99;

    // Most essential categories first; stable within a category.
    const ordered =
      [...vendors].sort(
        (a, b) => rank(a.category) - rank(b.category),
      );

    const selectedPackages: Record<string, SelectedVendorPackage> = {};

    let remaining = vendorBudget;

    let totalCost = 0;

    // Pass 1 — coverage: take the cheapest package of each vendor
    // in priority order, spreading the budget across as many
    // categories as possible.
    ordered.forEach((vendor) => {

      const cheapest =
        [...vendor.packages].sort((a, b) => a.cost - b.cost)[0];

      if (cheapest && cheapest.cost <= remaining) {
        selectedPackages[cheapest.id] = {
          vendorId: vendor.id,
          packageId: cheapest.id,
          packageName: cheapest.name,
          cost: cheapest.cost,
        };
        remaining -= cheapest.cost;
        totalCost += cheapest.cost;
      }

    });

    // Pass 2 — quality: upgrade covered vendors to the best tier the
    // leftover budget allows, again in priority order.
    ordered.forEach((vendor) => {

      const current =
        Object.values(selectedPackages).find(
          (p) => p.vendorId === vendor.id,
        );

      if (!current) {
        return;
      }

      const upgrade =
        [...vendor.packages]
          .sort((a, b) => b.cost - a.cost)
          .find(
            (p) =>
              p.cost > current.cost &&
              p.cost - current.cost <= remaining,
          );

      if (upgrade) {
        remaining -= upgrade.cost - current.cost;
        totalCost += upgrade.cost - current.cost;
        delete selectedPackages[current.packageId];
        selectedPackages[upgrade.id] = {
          vendorId: vendor.id,
          packageId: upgrade.id,
          packageName: upgrade.name,
          cost: upgrade.cost,
        };
      }

    });

    // Guarantee at least one vendor (constraint-valid scenario).
    if (Object.keys(selectedPackages).length === 0) {

      const firstVendor = ordered[0];

      const cheapest =
        [...firstVendor.packages].sort((a, b) => a.cost - b.cost)[0];

      selectedPackages[cheapest.id] = {
        vendorId: firstVendor.id,
        packageId: cheapest.id,
        packageName: cheapest.name,
        cost: cheapest.cost,
      };

      totalCost += cheapest.cost;

    }

    reasons.push({
      category: "Vendor",
      decision: `${Object.keys(selectedPackages).length} vendor selected`,
      reason:
        "Vendor budget is spread across as many essential categories as possible, then upgraded with any leftover.",
    });

    return { selectedPackages, totalCost };

  }

  /**
   * ---------------------------------------------------------
   * Tradition (Optional by default — skip, else keep)
   * ---------------------------------------------------------
   */
  private static selectTradition(
    traditionBudget: number,
    removable: boolean,
    reasons: SelectionReason[],
  ): TraditionSelection {

    // Tradition covers Mahar & Seserahan only. An ethnic adat
    // (Jawa, Sunda, Bali, ...) is never auto-selected — it is a
    // personal choice, so it is left for the couple to add manually
    // (surfaced as a hint when the budget allows).
    const cheapestMahar =
      [...maharPackages].sort((a, b) => a.price - b.price)[0];

    const cheapestSeserahan =
      [...seserahanPackages].sort((a, b) => a.price - b.price)[0];

    const baseTotal =
      cheapestMahar.price + cheapestSeserahan.price;

    if (traditionBudget >= baseTotal) {

      reasons.push({
        category: "Tradition",
        decision: "Mahar & Seserahan",
        reason:
          "Includes mahar and seserahan; no ethnic adat is auto-selected.",
      });

      return {
        traditionType: "",
        packagePrice: 0,
        maharPackage: cheapestMahar.label,
        mahar: cheapestMahar.price,
        seserahanPackage: cheapestSeserahan.label,
        seserahan: cheapestSeserahan.price,
        totalCost: baseTotal,
        skipped: false,
      };

    }

    if (removable) {

      reasons.push({
        category: "Tradition",
        decision: "Skipped",
        reason:
          "Tradition allocation cannot cover mahar and seserahan; skipped and budget reallocated.",
      });

      return {
        traditionType: "",
        packagePrice: 0,
        maharPackage: "",
        mahar: 0,
        seserahanPackage: "",
        seserahan: 0,
        totalCost: 0,
        skipped: true,
      };

    }

    // Not removable (e.g. Traditional style) — keep mahar & seserahan.
    reasons.push({
      category: "Tradition",
      decision: "Mahar & Seserahan (required)",
      reason:
        "Kept mahar and seserahan even though it exceeds the tradition allocation.",
    });

    return {
      traditionType: "",
      packagePrice: 0,
      maharPackage: cheapestMahar.label,
      mahar: cheapestMahar.price,
      seserahanPackage: cheapestSeserahan.label,
      seserahan: cheapestSeserahan.price,
      totalCost: baseTotal,
      skipped: false,
    };

  }

  /**
   * ---------------------------------------------------------
   * Reallocation — spend leftover budget on Decoration then Meal
   * without ever exceeding the total budget.
   * ---------------------------------------------------------
   */
  private static reallocateLeftover(
    result: PackageSelectionResult,
    budget: number,
    guestCount: number,
  ): PackageSelectionResult {

    let leftover = budget - result.totalCost;

    if (leftover <= 0) {
      return result;
    }

    // Upgrade decoration (venue bucket / High priority).
    const decorationBudget = result.decoration.cost + leftover;

    const betterDecoration =
      [...decorationCatalog]
        .sort((a, b) => b.cost - a.cost)
        .find((d) => d.cost <= decorationBudget);

    if (
      betterDecoration &&
      betterDecoration.cost > result.decoration.cost
    ) {

      leftover -= betterDecoration.cost - result.decoration.cost;

      result.decoration = {
        package: betterDecoration.value,
        cost: betterDecoration.cost,
      };

      result.reasons.push({
        category: "Decoration",
        decision: `Upgraded to ${betterDecoration.title}`,
        reason:
          "Leftover budget reallocated to decoration for a better wedding experience.",
      });

    }

    // Upgrade meal (Food) with any remaining leftover.
    if (guestCount > 0 && leftover > 0) {

      const perGuestBudget =
        (result.meal.totalCost + leftover) / guestCount;

      const betterMeal =
        [...mealCatalog]
          .sort((a, b) => b.price - a.price)
          .find((m) => m.price <= perGuestBudget);

      if (
        betterMeal &&
        betterMeal.price > result.meal.pricePerGuest
      ) {

        const newMealCost = guestCount * betterMeal.price;

        leftover -= newMealCost - result.meal.totalCost;

        result.meal = {
          package: betterMeal.value,
          pricePerGuest: betterMeal.price,
          totalCost: newMealCost,
        };

        result.reasons.push({
          category: "Food",
          decision: `Upgraded to ${betterMeal.title} meal`,
          reason:
            "Leftover budget reallocated to catering for a better guest experience.",
        });

      }

    }

    result.totalCost = budget - leftover;

    return result;

  }

}
