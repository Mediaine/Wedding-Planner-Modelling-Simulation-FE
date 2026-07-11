import type { TraditionType, TraditionTier } from "@/types/tradition";

export interface TraditionPackage {

    id: string;

    name: TraditionType;

    price: number;

    description: string;

}

export interface TraditionTierPackage {

    id: string;

    label: Exclude<TraditionTier, "Custom" | "">;

    price: number;

    description: string;

}

export const maharPackages: TraditionTierPackage[] = [

    {
        id: "mahar-simple",
        label: "Simple",
        price: 5000000,
        description: "Mahar sederhana",
    },

    {
        id: "mahar-classic",
        label: "Classic",
        price: 10000000,
        description: "Mahar standar",
    },

    {
        id: "mahar-luxury",
        label: "Luxury",
        price: 25000000,
        description: "Mahar premium",
    },

    {
        id: "mahar-royal",
        label: "Royal",
        price: 50000000,
        description: "Mahar mewah",
    },

];

export const seserahanPackages: TraditionTierPackage[] = [

    {
        id: "seserahan-simple",
        label: "Simple",
        price: 3000000,
        description: "Seserahan sederhana",
    },

    {
        id: "seserahan-classic",
        label: "Classic",
        price: 5000000,
        description: "Seserahan standar",
    },

    {
        id: "seserahan-luxury",
        label: "Luxury",
        price: 10000000,
        description: "Seserahan premium",
    },

    {
        id: "seserahan-royal",
        label: "Royal",
        price: 20000000,
        description: "Seserahan mewah",
    },

];

export const traditionPackages: TraditionPackage[] = [

    {

        id: "jawa",

        name: "Jawa",

        price: 15000000,

        description: "Siraman, Midodareni, Panggih",

    },

    {

        id: "sunda",

        name: "Sunda",

        price: 12000000,

        description: "Ngeuyeuk Seureuh",

    },

    {

        id: "minang",

        name: "Minangkabau",

        price: 18000000,

        description: "Baralek",

    },

    {

        id: "batak",

        name: "Batak",

        price: 20000000,

        description: "Mangulosi",

    },

    {

        id: "bali",

        name: "Bali",

        price: 25000000,

        description: "Mekala-kalaan",

    },

    {

        id: "betawi",

        name: "Betawi",

        price: 14000000,

        description: "Palang Pintu",

    },

    {

        id: "bugis",

        name: "Bugis",

        price: 17000000,

        description: "Mappacci",

    },

];