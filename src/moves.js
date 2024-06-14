// @flow

import type { Type } from "./types.js";

export type DamageCategory = "Physical" | "Special";

export type Move = {
  name: string,
  type: Type,
  power: number,
  accuracy: number, // as decimal
  damageCategory: DamageCategory,
};

// moved individual moves over to pokemon.js, was i supposed to turn it into a map so it was more convenient to export?
