import type { PlannerPreset } from "@/types/planner";

export const plannerPresets: PlannerPreset[] = [

  {
    id: "bronze",

    name: "Bronze",

    minBudget: 0,

    maxBudget: 50000000,

    guestInvitation: 250,

    venueType: "Home",

    venueCost: 5000000,

    mahar: 3000000,

    seserahan: 3000000,
  },

  {
    id: "silver",

    name: "Silver",

    minBudget: 50000001,

    maxBudget: 75000000,

    guestInvitation: 500,

    venueType: "Building",

    venueCost: 25000000,

    mahar: 5000000,

    seserahan: 5000000,
  },

  {
    id: "gold",

    name: "Gold",

    minBudget: 75000001,

    maxBudget: 100000000,

    guestInvitation: 700,

    venueType: "Garden",

    venueCost: 35000000,

    mahar: 7000000,

    seserahan: 7000000,
  },

  {
    id: "platinum",

    name: "Platinum",

    minBudget: 100000001,

    maxBudget: Number.MAX_SAFE_INTEGER,

    guestInvitation: 1000,

    venueType: "Hotel",

    venueCost: 50000000,

    mahar: 10000000,

    seserahan: 10000000,
  },

];