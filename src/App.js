import React, { useEffect } from 'react';
import { getAllCharacters } from './actions';
import './App.css';
import { connect } from 'react-redux';

function App({ getAllCharacters, characters }) {

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <div className="App">
      Async Redux Project

    <div>Lionel
      
    </div>
      <div className="Characters">
        {characters.map(character => <h1>{character.name}</h1>)}
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