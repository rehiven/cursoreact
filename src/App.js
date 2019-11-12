import React from 'react';
import logo from './logo.svg';
import './App.css';

function holaMundo(name){
  var presentation = <h2>Hola soy {name} </h2>
  return presentation;
}

function App() {
  var name = "christopher vargas";
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {presentation}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
