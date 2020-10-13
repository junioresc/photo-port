import React from 'react';
import './App.css';
import About from './components/about';
import Nav from './components/nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
