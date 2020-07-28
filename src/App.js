import React, { useState, useEffect } from 'react';
import { useCharacters } from './hooks/hooks'
import CharacterContainer from './components/character/Container'
import './App.css';

function App() {
  const [ characters, setCharacters ] = useCharacters()
  return (
    <div className="App">
      <h1>P2e Character Sheet</h1>

    </div>
  );
}

export default App;
