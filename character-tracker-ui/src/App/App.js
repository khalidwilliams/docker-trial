import { hot } from 'react-hot-loader/root';
import React, {useState} from 'react';
import Characters from '../Characters/Characters';
import CharacterForm from '../CharacterForm/CharacterForm';

const App = () => {
  const [ characters, addCharacterToState ] = useState([]);

  const addCharacter = (newCharacter) => {
    const newCharacters = [...characters, newCharacter];
    addCharacterToState(newCharacters)
  }

  return (
    <main>
      <h1>Character Tracker</h1>
      <CharacterForm currentCharacters={characters} addCharacter={addCharacter}/>
      <Characters characters={characters}/>
    </main>
  )
}

export default hot(App);
