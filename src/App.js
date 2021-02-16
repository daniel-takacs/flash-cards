import './App.css';
import React, {useState} from 'react';
import Card from './Card'

function App() {

  return (
    <div className="App">
    <Card frontSide="1+1" backSide="2"/>
    <Card frontSide="1*1" backSide="1"/>
    <Card frontSide="4-4" backSide="2"/>
    </div>
  );
}

export default App;
