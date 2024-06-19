import "./App.css";
import React from "react";
import { useState } from "react";
import computeDamage from "./damageCalculations";
import { GENGAR, NIDORINO } from "./pokemon.js";
function moveSelector() {
  return Math.random() >= 0.5 ? 0 : 1;
}
function App() {
  const [damageDealt, setDamageDealt] = useState(0);
  const [nidorinoHP, setNidorinoHP] = useState(NIDORINO.stats.maxHp);
  const [gengarHP, setGengarHP] = useState(GENGAR.stats.maxHp);
  const [nidorinoMove, setNidorinoMove] = useState("");
  const [gengarMove, setGengarMove] = useState("");
  return <div className="App">
      <header className="App-header">
        <img src="https://img.pokemondb.net/artwork/large/nidorino.jpg" />
        <img src="https://www.vhv.rs/dpng/d/424-4249873_pokemon-crystal-gengar-sprite-hd-png-download.png" />
        <p>Nidorino: {nidorinoHP}</p>
        <p>Gengar: {gengarHP}</p>
        <p>
          Nidorino used {nidorinoMove}! Gengar took {damageDealt} damage.
        </p>
        <p>Gengar used {gengarMove}</p>
        <p>
          {NIDORINO.moves.map(item => <button onClick={() => {
          const opponentMove = GENGAR.moves[moveSelector()];
          setGengarMove(opponentMove.name);
          setNidorinoMove(item.name);
          const attackDamage = computeDamage(item, NIDORINO, GENGAR);
          const opponentDamage = computeDamage(opponentMove, GENGAR, NIDORINO);
          setDamageDealt(attackDamage);
          setNidorinoHP(nidorinoHP - opponentDamage);
          setGengarHP(gengarHP - attackDamage);
        }}>
              {item.name}
            </button>)}
        </p>
      </header>
    </div>;
}
export default App;