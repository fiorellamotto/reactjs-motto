import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;