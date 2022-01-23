import React,{useState} from 'react';
import './App.css';
import Bulb from './component';

function App() {
  return (
    <div className="Light">
      <h1>Light App</h1>
      <Bulb/>
      <Bulb/>
    </div>
  );
}

export default App;
