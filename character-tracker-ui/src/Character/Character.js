import React from 'react';
import './Character.css';

const Character = ({ name, characterClass, ac, hp, race, id}) => {
  return (
    <article>
      <h1>{name}</h1>
      <h2>{race} - {characterClass}</h2>
      <div className="stat-block">
        <p>AC: {ac}</p>
        <p>HP: {hp}</p>
      </div>
    </article>
  )
}

export default Character;
