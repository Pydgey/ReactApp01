import React, { useState} from "react";
import Item from "./components/item";
import Card from "./components/Card/card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContext, themes } from "./components/Theme";

const App = () => {
  const [tema, setTema] = useState(themes.primary);
    function Alterar (){
        if (tema === themes.primary){
            setTema(themes.secondary)
        }else{
            setTema(themes.primary)
        }
        return tema;
    }
  return (
    
    <div>
      <h1>Primeira Aplicação React</h1>
      <ul>
        <Item texto ="Item 1" />
        <Item texto ="Item 2" />
        <Item texto ="Item 3" />
    
      </ul>
      <ThemeContext.Provider value={tema}>
      <Card />
      <ThemeBtn onClick={Alterar}></ThemeBtn>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;