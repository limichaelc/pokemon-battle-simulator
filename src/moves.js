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

export const POISON_STING: Move = {
  name: "Poison Sting",
  type: "Poison",
  power: 15,
  accuracy: 1,
  damageCategory: "Physical",
};

export const HORN_ATTACK: Move = {
  name: "Horn Attack",
  type: "Normal",
  power: 65,
  accuracy: 1,
  damageCategory: "Physical",
};

export const SHADOW_BALL: Move = {
  name: "Shadow Ball",
  type: "Ghost",
  power: 80,
  accuracy: 1,
  damageCategory: "Special",
};

export const POLTERGEIST: Move = {
  name: "Poltergeist",
  type: "Ghost",
  power: 110,
  accuracy: 0.9,
  damageCategory: "Special",
};

export const MOVES = { POISON_STING, HORN_ATTACK, SHADOW_BALL, POLTERGEIST };
