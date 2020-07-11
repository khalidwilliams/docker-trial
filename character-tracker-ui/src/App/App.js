import { hot } from 'react-hot-loader/root';
import React, {useState} from 'react';
import Characters from '../Characters/Characters';

const App = () => {
  const [ characters, addCharacter ] = useState([]);
  return (
    <main>
      <h1>Character Tracker</h1>
      <Characters characters={characters}/>
    </main>
  )
}

export default hot(App);
