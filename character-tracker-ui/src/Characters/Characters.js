import React from 'react';
import './Characters.css';
import Character from '../Character/Character';

const Characters = ({ characters }) => {
  const currentCharacters = characters.map( character => {
    return <Character {...character} />
  });
  return (
    <section>
      {currentCharacters}
    </section>
  )
}

export default Characters;
