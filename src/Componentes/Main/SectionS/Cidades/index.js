import React, { useState } from "react";
import cidades from "../../../../Constantes";
import api from "../../../../Services/api";
import "./style.css"

export default function Cidades() {

    let apikey = "0c0cea5e747de54561069cf0e28e25a8";
    // let apikey = "8ba2b45dc05d3fc8ac59f8c48e2f0540"

    const [foco, setFoco] = useState(false)

    const [tempMax, setTempMax] = useState()
    const [tempMin, setTempMin] = useState()


    function chamar(cidade) {
        api.get(`weather?q=${cidade}&appid=${apikey}&units=metric&lang=pt_br`)
        .then(res => {
            const [temp_max, temp_min] = res.data.main
            setTempMax(temp_max)
            setTempMin(temp_min)
        })
    }

    function handleMouseEnter(cidade){
        chamar(cidade.Nome)
    }

    return (
        <div className="boxCidades">
            {cidades.map(cidade =>
                <div key={cidade.Nome} className="cidade">
                    {cidade.Nome}
                    {foco && <p>{tempMax}</p>
                    }
                </div>
            )
            }
        </div>
    )
}

//{() => setFoco(true) && 