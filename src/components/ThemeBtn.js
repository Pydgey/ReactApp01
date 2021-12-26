import React, { useState, useContext} from "react";
import { ThemeContext, themes } from "./Theme";

const ThemeBtn = ({onClick}) =>{
    const theme = useContext(ThemeContext);
    return (
        <button style={{background: theme.background,
            color: theme.color}}
            type="button"
            onClick={onClick}>
                Alterar Tema
            </button>
    )
}

export default ThemeBtn;