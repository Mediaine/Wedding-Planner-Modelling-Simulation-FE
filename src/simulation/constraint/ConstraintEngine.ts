import type { WeddingScenario } from "@/types/scenario";
import type {
  Constraint,
  ConstraintResult,
} from "@/types/constraint";

export class ConstraintEngine {

  static evaluate(
    scenario: WeddingScenario,
  ): ConstraintResult {

    const constraints: Constraint[] = [];

    /*
    -------------------------------------
    Budget
    -------------------------------------
    */

    constraints.push({

      code: "BUDGET",

      title: "Budget",

      valid:
        scenario.basic.budget > 0,

      severity: "ERROR",

      message:
        scenario.basic.budget > 0
          ? "Budget is valid."
          : "Budget must be greater than zero.",

    });

    /*
    -------------------------------------
    Guest
    -------------------------------------
    */

    constraints.push({

      code: "INVITATION",

      title: "Guest Invitation",

      valid:
        scenario.guest.invitation > 0,

      severity: "ERROR",

      message:
        scenario.guest.invitation > 0
          ? "Guest invitation is valid."
          : "Guest invitation is required.",

    });

    /*
    -------------------------------------
    Meal Price
    -------------------------------------
    */

    constraints.push({

      code: "MEAL_PRICE",

      title: "Meal Price",

      valid:
        scenario.guest.mealPrice >= 25000,

      severity: "WARNING",

      message:
        scenario.guest.mealPrice >= 25000
          ? "Meal price is reasonable."
          : "Meal price looks unrealistically low.",

    });

    /*
    -------------------------------------
    Venue
    -------------------------------------
    */

    constraints.push({

      code: "VENUE",

      title: "Venue",

      valid:
        scenario.venue.venueType !== "",

      severity: "ERROR",

      message:
        scenario.venue.venueType
          ? "Venue selected."
          : "Venue must be selected.",

    });

    /*
    -------------------------------------
    Vendor
    -------------------------------------
    */

    constraints.push({

      code: "VENDOR",

      title: "Vendor",

      valid:
        Object.keys(
          scenario.vendor.selectedPackages,
        ).length > 0,

      severity: "ERROR",

      message:
        Object.keys(
          scenario.vendor.selectedPackages,
        ).length > 0
          ? "Vendor selected."
          : "Please select at least one vendor.",

    });

    /*
    -------------------------------------
    Tradition
    -------------------------------------
    */

    constraints.push({

      code: "TRADITION",

      title: "Tradition",

      valid: true,

      severity: "INFO",

      message:
        "Tradition is optional.",

    });

    /*
    -------------------------------------
    Capacity Rule
    -------------------------------------
    */

    if (
      scenario.venue.capacity > 0 &&
      scenario.guest.estimatedAttendance >
      scenario.venue.capacity
    ) {

      constraints.push({

        code: "VENUE_CAPACITY",

        title: "Venue Capacity",

        valid: false,

        severity: "ERROR",

        message:
          "Estimated attendance exceeds venue capacity.",

      });

    }

    /*
    -------------------------------------
    Remaining
    -------------------------------------
    */

    return {

      passed:

        constraints.every(

          constraint => constraint.valid,

        ),

      constraints,

    };

  }

}