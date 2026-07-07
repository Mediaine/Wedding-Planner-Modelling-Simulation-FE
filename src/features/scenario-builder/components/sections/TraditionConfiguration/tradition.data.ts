import type { TraditionType } from "@/types/tradition";

export interface TraditionPackage {

    id: string;

    name: TraditionType;

    price: number;

    description: string;

}

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