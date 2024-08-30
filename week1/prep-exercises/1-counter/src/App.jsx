import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Number Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;