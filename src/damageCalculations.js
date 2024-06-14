// @flow

import type { Type } from "./types.js";
import const typeEffectivenessMap from "./types.js"
import type { Move } from "./moves.js";
import type { Pokemon } from "./pokemon.js";

function computeTypeEffectiveness(
  moveType: Type,
  defenderType: Array<Type>
): number {
  if (defenderType.length == 1) {
    return (
      typeEffectivenessMap.get(moveType)?.get(defenderType[0]) ??
      TypeEffectiveness.DEFAULT
    );
  } else if (defenderType.length == 2) {
    const map = typeEffectivenessMap.get(moveType);
    const effectiveness1 =
      map?.get(defenderType[0]) ?? TypeEffectiveness.DEFAULT;
    const effectiveness2 =
      map?.get(defenderType[1]) ?? TypeEffectiveness.DEFAULT;
    return effectiveness1 * effectiveness2;
  }
  return TypeEffectiveness.DEFAULT;
}

export default function computeDamage(
  move: Move,
  attacker: Pokemon,
  defender: Pokemon
): number {
  // does it hit?
  const hitRoll = Math.random();
  if (hitRoll > move.accuracy) {
    return -1;
  }

  const typeEffectiveness = computeTypeEffectiveness(move.type, defender.types);

  // (power + atk - def) * typeEffectiveness
  var atkStat = 0;
  var defStat = 0;
  if (move.damageCategory === "Physical") {
    atkStat = attacker.stats.atk;
    defStat = defender.stats.def;
  } else if (move.damageCategory === "Special") {
    atkStat = attacker.stats.spAtk;
    defStat = defender.stats.spDef;
  }
  const damage = (move.power + atkStat - defStat) * typeEffectiveness;
  if (damage <= 0) {
    return 1;
  }
  return damage;
}
