// @flow

import type { Type } from "./types";
import type { Move } from "./moves";
import { MOVES } from "./moves";

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

export const GENGAR: Pokemon = {
  moves: [MOVES.SHADOW_BALL, MOVES.POLTERGEIST],
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

export const NIDORINO: Pokemon = {
  moves: [MOVES.POISON_STING, MOVES.HORN_ATTACK],
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
