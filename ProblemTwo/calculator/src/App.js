import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import React, { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator/>
      </header>
    </div>
  );
}

export default App;
