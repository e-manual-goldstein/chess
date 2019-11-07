import React from 'react';
import './App.css';
import Board from './containers/Board/Board'
import initialSetup from './assets/initial-setup'

function App() {
  return (
    <div className="App">
      <Board setup={initialSetup} />
    </div>
  );
}

export default App;
