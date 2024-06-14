// @flow

import type { Type } from "./types";
import type { Move } from "./moves";

type Stats = {
  atk: number,
  def: number,
  spAtk: number,
  spDef: number,
  sp: number,
  maxHp: number,
  currentHp: number, // this should actually be moved into a state variable somewhere, can you figure out how?
};

export type Pokemon = {
  stats: Stats,
  name: string,
  types: Array<Type>,
  moves: Array<Move>,
};

const POISON_STING: Move = {
  name: "Poison Sting",
  type: "Poison",
  power: 15,
  accuracy: 1,
  damageCategory: "Physical",
};

const HORN_ATTACK: Move = {
  name: "Horn Attack",
  type: "Normal",
  power: 65,
  accuracy: 1,
  damageCategory: "Physical",
};

const SHADOW_BALL: Move = {
  name: "Shadow Ball",
  type: "Ghost",
  power: 80,
  accuracy: 1,
  damageCategory: "Special",
};

const POLTERGEIST: Move = {
  name: "Poltergeist",
  type: "Ghost",
  power: 110,
  accuracy: 0.9,
  damageCategory: "Special",
};

const GENGAR: Pokemon = {
  moves: [SHADOW_BALL, POLTERGEIST],
  name: "Gengar",
  types: ["Poison", "Ghost"],
  stats: {
    atk: 65,
    def: 60,
    spAtk: 130,
    spDef: 75,
    sp: 110,
    maxHp: 60,
    currentHp: 60,
  },
};

const NIDORINO: Pokemon = {
  moves: [POISON_STING, HORN_ATTACK],
  name: "Nidorino",
  types: ["Poison"],
  stats: {
    atk: 72,
    def: 57,
    spAtk: 55,
    spDef: 55,
    sp: 65,
    maxHp: 61,
    currentHp: 61,
  },
};
