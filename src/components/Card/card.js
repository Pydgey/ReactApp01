import React, { useState, useContext } from "react";
import Button from "./button";
import { ThemeContext } from "../Theme";

const Card = () => {
    const theme = useContext(ThemeContext)
    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }
    function Remover(){
        if(valor > 0){
            setValor(valor - 1)
        }
    }

    return (
        <div className="card">
            <div className="card-header"
                style={{background: theme.background,
                        color: theme.color}}>
                Primeiro Card
            </div>
            <div className="card-body" 
            style={{background: theme.background,
                    color: theme.color}}>

                <Button className = "btn btn-success"
                 onClick = {Adicionar}
                > Adicionar </Button>

                <Button className = "btn btn-danger"
                onClick={Remover}
                > Remover </Button>
                
                <p style={{background: theme.background,
                        color: theme.color}}>{valor}</p>
            </div>
        </div>
    )
}
export default Card;