import React,{useState} from 'react';
import './App.css';
import Bulb from './component';

function App() {
  return (
    <div className="Light">
      <Bulb/>
      <Bulb/>
    </div>
  );
}

export default App;
