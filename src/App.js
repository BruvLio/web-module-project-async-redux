import React, { useEffect } from 'react';
import { getAllCharacters } from './actions';
import { connect } from 'react-redux';
import Character from './components/character';

import './App.css';
import './character.css'

function App({ getAllCharacters, characters }) {

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <div className="App">
      Async Redux Project

      <div>
        Lionel Project
      </div>

      <div className="characters">
        {characters.map(character => <Character key={character.name} character={character} />)}
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    characters: state.characters
  });
}

export default connect(mapStateToProps, { getAllCharacters })(App);