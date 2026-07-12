import type { WeddingScenario } from "@/types/scenario";
import type { TimelineStep } from "@/types/timeline";

/**
 * Wedding Timeline Engine.
 *
 * Produces an ordered list of timeline steps derived from the
 * scenario. The result is intentionally scenario-dependent:
 * guest count, venue type, decoration, tradition and style all
 * change the generated flow. This is simulation output — never
 * edited by the user.
 */
export class TimelineEngine {

  /** Time the wedding day preparation begins. */
  static readonly START_TIME = "06:00";

  static buildSteps(
    scenario: WeddingScenario,
  ): TimelineStep[] {

    const steps: TimelineStep[] = [];

    const guestCount =
      TimelineEngine.resolveGuestCount(scenario);

    const decorationMinutes =
      TimelineEngine.resolveDecorationDuration(scenario);

    const ceremonyMinutes =
      TimelineEngine.resolveCeremonyDuration(scenario);

    const receptionMinutes =
      TimelineEngine.resolveReceptionDuration(guestCount);

    /**
     * ============================
     * Preparation
     * ============================
     */

    steps.push({
      category: "Preparation",
      title: "Vendor Setup",
      duration: 120,
      description: "Vendor arrival, load-in and equipment setup.",
      icon: "Wrench",
    });

    steps.push({
      category: "Preparation",
      title: "Decoration Setup",
      duration: decorationMinutes,
      description:
        `${scenario.venue.decorationPackage || "Standard"} decoration installation.`,
      icon: "Flower2",
    });

    steps.push({
      category: "Preparation",
      title: "Bride Makeup",
      duration: 120,
      description: "Bridal makeup, hair and attire.",
      icon: "Sparkles",
    });

    steps.push({
      category: "Preparation",
      title: "Groom Preparation",
      duration: 60,
      description: "Groom grooming and attire.",
      icon: "Shirt",
    });

    /**
     * ============================
     * Ceremony
     * ============================
     */

    steps.push({
      category: "Ceremony",
      title: "Akad Nikah",
      duration: ceremonyMinutes,
      description:
        `${scenario.basic.style} ceremony solemnization.`,
      icon: "Heart",
    });

    steps.push({
      category: "Ceremony",
      title: "Family Photo",
      duration: 30,
      description: "Family and couple photo session.",
      icon: "Camera",
    });

    /**
     * ============================
     * Tradition (optional)
     * ============================
     */

    TimelineEngine
      .resolveTraditionSteps(scenario)
      .forEach((step) => steps.push(step));

    /**
     * ============================
     * Reception
     * ============================
     */

    // Garden venues get a golden hour photo session before reception.
    if (scenario.venue.venueType === "Garden") {

      steps.push({
        category: "Reception",
        title: "Golden Hour Photo Session",
        duration: 30,
        description: "Outdoor golden hour photography before reception.",
        icon: "Sun",
      });

    }

    steps.push({
      category: "Reception",
      title: "Reception Open",
      duration: 30,
      description: "Guests welcomed into the venue.",
      icon: "DoorOpen",
    });

    steps.push({
      category: "Reception",
      title: "Bride Entrance",
      duration: 30,
      description: "Grand entrance of the couple.",
      icon: "Crown",
    });

    steps.push({
      category: "Reception",
      title: "Lunch",
      duration: 60,
      description: `Meal service for ${guestCount.toLocaleString("id-ID")} guests.`,
      icon: "UtensilsCrossed",
    });

    steps.push({
      category: "Reception",
      title: "Entertainment",
      duration: receptionMinutes,
      description: `Live entertainment for ${guestCount.toLocaleString("id-ID")} guests.`,
      icon: "Music",
    });

    steps.push({
      category: "Reception",
      title: "Reception Close",
      duration: 15,
      description: "Closing remarks and farewell.",
      icon: "DoorClosed",
    });

    /**
     * ============================
     * Closing
     * ============================
     */

    steps.push({
      category: "Closing",
      title: "Vendor Breakdown",
      duration: 120,
      description: "Vendor teardown, cleanup and load-out.",
      icon: "Truck",
    });

    return steps;

  }

  /**
   * Guest count drives reception length. Falls back to the
   * invitation-based estimate when attendance is not set.
   */
  private static resolveGuestCount(
    scenario: WeddingScenario,
  ): number {

    const attendance =
      scenario.guest.estimatedAttendance;

    if (attendance > 0) {
      return attendance;
    }

    return scenario.guest.invitation * 2;

  }

  private static resolveReceptionDuration(
    guestCount: number,
  ): number {

    if (guestCount >= 700) {
      return 240;
    }

    if (guestCount >= 300) {
      return 180;
    }

    return 120;

  }

  /**
   * Decoration package sets the setup duration. Custom decoration
   * is estimated from its cost.
   */
  private static resolveDecorationDuration(
    scenario: WeddingScenario,
  ): number {

    switch (scenario.venue.decorationPackage) {

      case "Simple":
        return 60;

      case "Classic":
        return 120;

      case "Luxury":
        return 180;

      case "Royal":
        return 240;

      case "Custom":
        return TimelineEngine.estimateCustomDecoration(
          scenario.venue.decorationCost,
        );

      default:
        return 60;

    }

  }

  private static estimateCustomDecoration(
    cost: number,
  ): number {

    // ~1 minute per Rp 250.000, clamped to a sane 60-240 min range.
    const estimated =
      Math.round(cost / 250000);

    return Math.min(240, Math.max(60, estimated));

  }

  /**
   * Modern style keeps ceremony short, Traditional runs longer.
   */
  private static resolveCeremonyDuration(
    scenario: WeddingScenario,
  ): number {

    switch (scenario.basic.style) {

      case "Modern":
        return 45;

      case "Traditional":
        return 90;

      default:
        return 60;

    }

  }

  private static resolveTraditionSteps(
    scenario: WeddingScenario,
  ): TimelineStep[] {

    const type = scenario.tradition.traditionType;

    if (!type) {
      return [];
    }

    const named: Record<string, string[]> = {
      Jawa: ["Panggih", "Sungkeman"],
      Sunda: ["Saweran", "Huap Lingkung"],
      Betawi: ["Palang Pintu"],
    };

    const titles =
      named[type] ?? [`Prosesi Adat ${type}`];

    return titles.map((title) => ({
      category: "Tradition",
      title,
      duration: 30,
      description: `${type} traditional procession.`,
      icon: "Landmark",
    }));

  }

}
