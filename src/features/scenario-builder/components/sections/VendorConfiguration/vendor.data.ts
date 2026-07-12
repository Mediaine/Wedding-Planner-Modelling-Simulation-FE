import type { Vendor } from "@/types/vendor";

export const vendors: Vendor[] = [
  {
    id: "photography",
    category: "Documentation",
    name: "Photography",
    packages: [
      {
        id: "photo-basic",
        name: "Basic",
        description: "1 Photographer",
        cost: 3500000,
      },

      {
        id: "photo-premium",
        name: "Premium",
        description: "2 Photographer + Album",
        cost: 6000000,
      },

      {
        id: "photo-luxury",
        name: "Luxury",
        description: "Full Team",
        cost: 10000000,
      },
    ],
  },

  {
    id: "videography",
    category: "Documentation",
    name: "Videography",
    packages: [
      {
        id: "video-basic",
        name: "Basic",
        description: "1 Camera",
        cost: 4000000,
      },

      {
        id: "video-cinematic",
        name: "Cinematic",
        description: "Highlight Video",
        cost: 7000000,
      },

      {
        id: "video-premium",
        name: "Premium",
        description: "2 Camera + Drone",
        cost: 9500000,
      },
    ],
  },

  {
    id: "drink",
    category: "Drink & Beverage",
    name: "Drink Corner",
    packages: [
      {
        id: "coffee-small",
        name: "100 Cup",
        description: "100 Cups",
        cost: 2500000,
      },

      {
        id: "coffee-medium",
        name: "300 Cup",
        description: "300 Cups",
        cost: 4500000,
      },

      {
        id: "coffee-unlimited",
        name: "Coffee Unlimited",
        description: "Unlimited",
        cost: 6500000,
      },

      {
        id: "icecream",
        name: "Ice Cream Booth",
        description: "Unlimited Ice Cream",
        cost: 2500000,
      },
    ],
  },

  {
    id: "food",
    category: "Food & Beverage",
    name: "Food Corner",
    packages: [
      {
        id: "bakso",
        name: "Bakso",
        description: "Bakso Corner",
        cost: 2500000,
      },
      {
        id: "siomay",
        name: "Siomay",
        description: "Siomay Corner",
        cost: 2500000,
      },
      {
        id: "sate",
        name: "Sate",
        description: "Sate Corner",
        cost: 3500000,
      },
    ],
  },

  {
    id: "wo",
    category: "Wedding Organizer",
    name: "Wedding Organizer",
    packages: [
      {
        id: "wo-basic",
        name: "Basic",
        description: "Coordination on Wedding Day",
        cost: 6000000,
      },
      {
        id: "wo-premium",
        name: "Premium",
        description: "Preparation + Wedding Day",
        cost: 12000000,
      },
      {
        id: "wo-luxury",
        name: "Luxury",
        description: "Full Wedding Organizer Service",
        cost: 20000000,
      },
    ],
  },

  {
    id: "mc",
    category: "Master of Ceremony",
    name: "MC Wedding",
    packages: [
      {
        id: "mc-basic",
        name: "Basic",
        description: "Reception MC",
        cost: 2500000,
      },
      {
        id: "mc-premium",
        name: "Premium",
        description: "Akad + Reception",
        cost: 4500000,
      },
      {
        id: "mc-professional",
        name: "Professional",
        description: "Experienced Wedding MC",
        cost: 7000000,
      },
    ],
  },

  {
    id: "mua",
    category: "Beauty",
    name: "Make Up Artist",
    packages: [
      {
        id: "mua-basic",
        name: "Basic",
        description: "Bride Makeup",
        cost: 4000000,
      },
      {
        id: "mua-premium",
        name: "Premium",
        description: "Bride + Groom Makeup",
        cost: 7000000,
      },
      {
        id: "mua-luxury",
        name: "Luxury",
        description: "Bride, Groom + Family Makeup",
        cost: 12000000,
      },
    ],
  },

  {
    id: "entertainment",
    category: "Entertainment",
    name: "Entertainment",
    packages: [
      {
        id: "ent-acoustic",
        name: "Acoustic",
        description: "Acoustic Band",
        cost: 5000000,
      },
      {
        id: "ent-band",
        name: "Wedding Band",
        description: "Professional Band",
        cost: 10000000,
      },
      {
        id: "ent-premium",
        name: "Premium Band",
        description: "Band + Singer",
        cost: 18000000,
      },
    ],
  },

  {
    id: "photobooth",
    category: "Entertainment",
    name: "Photobooth",
    packages: [
      {
        id: "pb-basic",
        name: "Basic",
        description: "Unlimited Print 3 Hours",
        cost: 3000000,
      },
      {
        id: "pb-premium",
        name: "Premium",
        description: "Unlimited Print 5 Hours",
        cost: 5000000,
      },
      {
        id: "pb-360",
        name: "360 Booth",
        description: "360 Video Booth",
        cost: 7500000,
      },
    ],
  },
];
