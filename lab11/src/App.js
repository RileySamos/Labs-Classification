import React from 'react';
import pizza from './images/MamaMia its pizza.jpg';
import PizzaCard from './components/PizzaCard';
import './App.css'

function App() {
  return (
    <div className="App">
      <PizzaCard title="Ваша пицца" text='Пицца с рандомным вкусом (на свой страх и риск)' img={pizza} price='от 120 руб.'/>
    </div>
  );
}

export default App;