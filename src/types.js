// @flow

const TypeEffectiveness = Object.freeze({
  NOT_VERY_EFFECTIVE: 0.5,
  SUPER_EFFECTIVE: 2,
  NO_EFFECT: 0,
  DEFAULT: 1,
});

export type Type = "Normal" | "Poison" | "Ghost" | "Water" | "Fire" | "Grass";

export const typeEffectivenessMap: Map<Type, Map<Type, number>> = new Map([
  ["Normal", new Map([["Ghost", TypeEffectiveness.NO_EFFECT]])],
  [
    "Poison",
    new Map([
      ["Ghost", TypeEffectiveness.NOT_VERY_EFFECTIVE],
      ["Grass", TypeEffectiveness.SUPER_EFFECTIVE],
    ]),
  ],
  ["Ghost", new Map([["Normal", TypeEffectiveness.NO_EFFECT]])],
  // Water: Map {
  //     Fire: TypeEffectiveness.SUPER_EFFECTIVE,
  //     Grass: TypeEffectiveness.NOT_VERY_EFFECTIVE,
  // },
  // Fire: Map {
  //     Grass: TypeEffectiveness.SUPER_EFFECTIVE,
  //     Water: TypeEffectiveness.NOT_VERY_EFFECTIVE,
  // },
  // Grass: Map {
  //     Water: TypeEffectiveness.SUPER_EFFECTIVE,
  //     Fire: TypeEffectiveness.NOT_VERY_EFFECTIVE,
  //     Poison: TypeEffectiveness.NOT_VERY_EFFECTIVE,
  // },
]);
