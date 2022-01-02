import React, { useState, useContext } from "react";
import Counter from "./button";
import { ThemeContext } from "../Theme";

const Card = () => {
    const theme = useContext(ThemeContext)
    
    const Buttons = ({increment, decrement, count}) => (
        <div>
            <h1 style={{background: theme.background,
                        color: theme.color}}>Valor Atual = {count}</h1>
            <div style={{background: theme.background,
                        color: theme.color}}>

                <button className="btn btn-success"
                        onClick={increment}>
                        Adicionar</button>                
                <button className="btn btn-danger"
                        onClick={decrement}>
                        Remover</button>
            </div>
        </div>
    )

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
                
            </div>
            <Counter render = {
                ({  increment, decrement, count}) => (
                    <Buttons 
                    increment={increment}
                    decrement={decrement}
                    count={count} 
                    />
                )
            }/>
        </div>
    )
}
export default Card;