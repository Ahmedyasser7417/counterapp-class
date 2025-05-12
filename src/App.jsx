import React, { Component } from 'react';
import './App.css';
import CounterFunction from './components/counterFunction/index';
// import CounterClass from './components/counterclass/index';
function App() {
  return (
    <div className="App">
      <CounterFunction />
      {/* <CounterClass /> */}
    </div>
  );
}


export default App;
