const TypeEffectiveness = Object.freeze({
  NOT_VERY_EFFECTIVE: 0.5,
  SUPER_EFFECTIVE: 2,
  NO_EFFECT: 0,
  DEFAULT: 1
});
export const typeEffectivenessMap = new Map([["Normal", new Map([["Ghost", TypeEffectiveness.NO_EFFECT]])], ["Poison", new Map([["Ghost", TypeEffectiveness.NOT_VERY_EFFECTIVE], ["Poison", TypeEffectiveness.NOT_VERY_EFFECTIVE], ["Grass", TypeEffectiveness.SUPER_EFFECTIVE]])], ["Ghost", new Map([["Normal", TypeEffectiveness.NO_EFFECT]])]]);
function computeTypeEffectiveness(moveType, defenderType) {
  if (defenderType.length == 1) {
    return typeEffectivenessMap.get(moveType)?.get(defenderType[0]) ?? TypeEffectiveness.DEFAULT;
  } else if (defenderType.length == 2) {
    const map = typeEffectivenessMap.get(moveType);
    const effectiveness1 = map?.get(defenderType[0]) ?? TypeEffectiveness.DEFAULT;
    const effectiveness2 = map?.get(defenderType[1]) ?? TypeEffectiveness.DEFAULT;
    return effectiveness1 * effectiveness2;
  }
  return TypeEffectiveness.DEFAULT;
}
export default function computeDamage(move, attacker, defender) {
  const hitRoll = Math.random();
  if (hitRoll > move.accuracy) {
    return -1;
  }
  const typeEffectiveness = computeTypeEffectiveness(move.type, defender.types);
  if (typeEffectiveness == 0) {
    return 0;
  }
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