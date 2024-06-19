import { MOVES } from "./moves";
export const GENGAR = {
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
    currentHp: 60
  }
};
export const NIDORINO = {
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
    currentHp: 61
  }
};