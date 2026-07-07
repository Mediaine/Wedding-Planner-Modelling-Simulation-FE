// import type { Vendor } from "@/types/vendor";

// export const vendors: Vendor[] = [

//   {
//     id: "photographer",
//     category: "Documentation",
//     name: "Photographer",
//     description: "Professional Wedding Photographer",
//     cost: 3500000,
//     selected: false,
//   },

//   {
//     id: "videographer",
//     category: "Documentation",
//     name: "Videographer",
//     description: "Cinematic Wedding Video",
//     cost: 4000000,
//     selected: false,
//   },

//   {
//     id: "drone",
//     category: "Documentation",
//     name: "Drone",
//     description: "Drone Aerial Coverage",
//     cost: 2000000,
//     selected: false,
//   },

//   {
//     id: "wo",
//     category: "Service",
//     name: "Wedding Organizer",
//     description: "Full Day WO",
//     cost: 7000000,
//     selected: false,
//   },

//   {
//     id: "mc",
//     category: "Service",
//     name: "Master of Ceremony",
//     description: "Professional MC",
//     cost: 2500000,
//     selected: false,
//   },

//   {
//     id: "coffee",
//     category: "Food & Beverage",
//     name: "Coffee Corner",
//     description: "Unlimited Coffee",
//     cost: 3000000,
//     selected: false,
//   },

//   {
//     id: "icecream",
//     category: "Food & Beverage",
//     name: "Ice Cream Booth",
//     description: "Unlimited Ice Cream",
//     cost: 2500000,
//     selected: false,
//   },

// ];

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
    id: "coffee",
    category: "Food & Beverage",
    name: "Coffee Corner",
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
        name: "Unlimited",
        description: "Unlimited",
        cost: 6500000,
      },

    ],
  },

];
