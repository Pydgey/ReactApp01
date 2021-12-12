import React from "react";
import Item from "./components/item";
import Card from "./components/Card/card";

const App = () => {
  return (
    <div>
      <h1>Primeira Aplicação React</h1>
      <ul>
        <Item texto ="Item 1" />
        <Item texto ="Item 2" />
        <Item texto ="Item 3" />
    
      </ul>
      <Card />
    </div>
  )
}

export default App;