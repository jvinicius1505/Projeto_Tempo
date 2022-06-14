import React from "react";
import "./style.css"

export default function Input(){

    return(
        <div className="boxInput">
            <input 
                placeholder="Pesquise..."
                className="pesquisa"
            />
            <input 
                type="button"
                className="botao"
                value=""/> 
        </div>
    )
}