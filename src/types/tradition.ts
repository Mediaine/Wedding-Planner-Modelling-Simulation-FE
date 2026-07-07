export type TraditionType =
  | ""
  | "Jawa"
  | "Sunda"
  | "Minangkabau"
  | "Batak"
  | "Bali"
  | "Betawi"
  | "Bugis";

export interface TraditionConfiguration {

  traditionType: TraditionType;

  packagePrice: number;

  mahar: number;

  seserahan: number;

}