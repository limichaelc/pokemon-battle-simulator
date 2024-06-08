// @flow

import type { Type } from "./App.js";
// do i import const typeEffectivenessMap: Map<Type, Map<Type, number>> = new Map(.....?

export default function computeTypeEffectiveness(
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
