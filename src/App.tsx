import React from 'react';
import Accordion from './components/Accordion';

function App() {
  return (
    <>
      <Accordion 
        title='The Flash'
        content='After being struck by lightning, Barry Allen wakes up from his coma to discover he been given the power of super speed, becoming the Flash'
      />
      <Accordion 
        title='Spiderman'
        content='Peter Parker then attains spider-like qualities such as genius-level intellect, superb scientist and inventor, superhuman strength, speed, durability, and agility, he has the ability to cling to most surfaces, precognitive spider-sense, and his wrist as web-shooters.'
      />
      <Accordion 
        title='Ironman'
        content='A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist.'
      />
    </>
  );
}

export default App;
