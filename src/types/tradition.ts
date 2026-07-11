export type TraditionType =
  | ""
  | "Jawa"
  | "Sunda"
  | "Minangkabau"
  | "Batak"
  | "Bali"
  | "Betawi"
  | "Bugis"
  | "Custom";

export type TraditionTier =
  | "Simple"
  | "Classic"
  | "Luxury"
  | "Royal"
  | "Custom"
  | "";

export interface TraditionConfiguration {

  traditionType: TraditionType;

  packagePrice: number;

  maharPackage: TraditionTier;

  mahar: number;

  seserahanPackage: TraditionTier;

  seserahan: number;

}
