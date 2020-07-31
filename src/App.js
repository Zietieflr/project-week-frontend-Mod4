import React from 'react';
import { useCharacters } from './hooks/hooks'
import CharacterContainer from './components/character/Container'
import './App.css';

function App() {
  const [ characters, setCharacters, editCharacter ] = useCharacters()
  return (
    <div className="App">
      <h1>P2e Character Sheet</h1>
      <CharacterContainer characters={characters} setCharacters={setCharacters} editCharacter={editCharacter} /> 
    </div>
  );
}

export default App;
