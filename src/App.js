// @flow

import logo from './logo.svg';
import './App.css';

enum Type {
  Normal,
  Poison,
  Ghost,
  Water,
  Fire,
  Grass,
}

enum DamageCategory {
Physical,
Special,
}

type Move = {
  name: string,
  type: Type,
  power: number,
  accuracy: number, // as decimal
  damageCategory: DamageCategory,
}

type Stats = {
  atk: number,
  def: number,
  spAtk: number,
  spDef: number,
  sp: number,
  maxHp: number,
  currentHp: number, // this should actually be moved into a state variable somewhere, can you figure out how?
}

type Pokemon = {
  stats: Stats,
  name: string,
  types: Array<Type>,
  moves: Array<Move>,
}

enum TypeEffectiveness {
  NOT_VERY_EFFECTIVE = 0.5,
  SUPER_EFFECTIVE = 2,
  NO_EFFECT = 0,
  DEFAULT = 1,
}

const typeEffectivenessMap: Map<Type, Map<Type, TypeEffectiveness>> = new Map([
  [
    Type.Normal,
    new Map ([
      [Type.Ghost, TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  [
    Type.Poison,
    new Map ([
      [Type.Ghost, TypeEffectiveness.NOT_VERY_EFFECTIVE],
      [Type.Grass, TypeEffectiveness.SUPER_EFFECTIVE],
    ]),
  ],
  [
    Type.Ghost,
    new Map ([
      [Type.Normal, TypeEffectiveness.NO_EFFECT],
    ]),
  ],
  Water: Map {
      Fire: TypeEffectiveness.SUPER_EFFECTIVE,
      Grass: TypeEffectiveness.NOT_VERY_EFFECTIVE,
  },
  Fire: Map {
      Grass: TypeEffectiveness.SUPER_EFFECTIVE,
      Water: TypeEffectiveness.NOT_VERY_EFFECTIVE,
  },
  Grass: Map {
      Water: TypeEffectiveness.SUPER_EFFECTIVE,
      Fire: TypeEffectiveness.NOT_VERY_EFFECTIVE,
      Poison: TypeEffectiveness.NOT_VERY_EFFECTIVE,
  },
])

function computeTypeEffectiveness(moveType: Type, defenderType: Array<Type>): number {
  if (defenderType.length == 1) {
    return (typeEffectivenessMap.get(moveType)?.get(defenderType[0]) ?? TypeEffectiveness.DEFAULT) as number
  } else if (defenderType.length == 2) {
    const map = typeEffectivenessMap.get(moveType)
    const effectiveness1 = (map?.get(defenderType[0]) ?? TypeEffectiveness.DEFAULT) as number
    const effectiveness2 = (map?.get(defenderType[1]) ?? TypeEffectiveness.DEFAULT) as number
    return effectiveness1 * effectiveness2
  }
  return TypeEffectiveness.DEFAULT as number
}

function computeDamage(move: Move, attacker: Pokemon, defender: Pokemon): number {
  // does it hit?
  const hitRoll = Math.random()
  if (hitRoll > move.accuracy) {
      return -1
  }

  const typeEffectiveness = computeTypeEffectiveness(move.type, defender.types)

  // (power + atk - def) * typeEffectiveness
  var atkStat = 0
  var defStat = 0
  if (move.damageCategory === DamageCategory.Physical) {
      atkStat = attacker.stats.atk
      defStat = defender.stats.def
  } else if (move.damageCategory === DamageCategory.Special) {
      atkStat = attacker.stats.spAtk
      defStat = defender.stats.spDef
  }
  const damage = (move.power + atkStat - defStat) * typeEffectiveness
  if (damage <= 0) {
      return 1
  }
  return damage
}

const POISON_STING: Move = {
  name: "Poison Sting",
  type: Type.Poison,
  power: 15,
  accuracy: 1,
  damageCategory: DamageCategory.Physical,
}

const HORN_ATTACK: Move = {
  name: "Horn Attack",
  type: Type.Normal,
  power: 65,
  accuracy: 1,
  damageCategory: DamageCategory.Physical,
}

const SHADOW_BALL: Move = {
  name: "Shadow Ball",
  type: Type.Ghost,
  power: 80,
  accuracy: 1,
  damageCategory: DamageCategory.Special,
}

const POLTERGEIST: Move = {
  name: "Poltergeist",
  type: Type.Ghost,
  power: 110,
  accuracy: 0.9,
  damageCategory: DamageCategory.Special,
}

const GENGAR: Pokemon = {
moves: [SHADOW_BALL, POLTERGEIST],
name: "Gengar",
types: [Type.Poison, Type.Ghost],
stats: {
  atk: 65,
  def: 60,
  spAtk: 130,
  spDef: 75,
  sp: 110,
  maxHp: 60,
  currentHp: 60,
}
}

const NIDORINO: Pokemon = {
moves: [POISON_STING, HORN_ATTACK],
name: "Nidorino",
types: [Type.Poison],
stats: {
  atk: 72,
  def: 57,
  spAtk: 55,
  spDef: 55,
  sp: 65,
  maxHp: 61,
  currentHp: 61,
}
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
