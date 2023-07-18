import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import React from 'react';

function App() {
  return (
    
    <React.StrictMode>
      <Navbar/>
    <main className="container">
      <Counters></Counters>
    </main>
    </React.StrictMode>
  );
}

export default App;
