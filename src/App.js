import React from 'react'
import './App.css';
import { Link } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className="App-logo" alt="Trival App logo" src='/logo.png' />
        </Link>
        <p>
          Testing.
        </p>
      </section>
    </div>
  );
}

export default App;
