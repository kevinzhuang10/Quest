import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A fitness platform designed to help you succeed.
        </p>
        <button className="getInTouch">
          Get In Touch
        </button>
      </header>
    </div>
  );
}

export default App;
