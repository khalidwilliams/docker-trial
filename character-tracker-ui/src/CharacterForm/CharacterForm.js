import React, { useState } from 'react';
import './CharacterForm.css';

const CharacterForm = ({currentCharacters, addCharacter}) => {
  const initialState = {
    name: '',
    race: '',
    characterClass: '',
    ac: '',
    hp: ''
  }

  const [formState, updateState] = useState(initialState)

  const handleChange = (event) => {
    const newState = {...formState};

    newState[event.target.name] = event.target.value;

    updateState(newState);
  }

  const addNewCharacter = (event) => {
    event.preventDefault();
    addCharacter(formState);
    updateState(initialState);
  }
  
  return (
    <form>
      <h2>Add a New Character:</h2>
      <label htmlFor="name">Character name:</label>
      <input onChange={handleChange} id="name" type="text" name="name" value={formState.name}/>
      <label htmlFor="race">Character race:</label>
      <input onChange={handleChange} id="race" type="text" name="race" value={formState.race}/>
      <label htmlFor="characterClass">Character class:</label>
      <input onChange={handleChange} id="characterClass" type="text" name="characterClass" value={formState.characterClass}/>
      <label htmlFor="ac">Character ac:</label>
      <input onChange={handleChange} id="ac" type="text" name="ac" value={formState.ac}/>
      <label htmlFor="hp">Character hp:</label>
      <input onChange={handleChange} id="hp" type="text" name="hp" value={formState.hp}/>
      <button onClick={addNewCharacter}>Add character!</button>
    </form>
  )
}

export default CharacterForm;
