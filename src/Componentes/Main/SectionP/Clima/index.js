import React, { useState } from "react";
import api from "../../../../Services/api";
import "./style.css"

export default function Clima() {

    const [cidade, setCidade] = useState("")
    const [nome, setNome] = useState("Local")
    const [temp, setTemp] = useState("")
    const [tempMax, setTempMax] = useState("")
    const [tempMin, setTempMin] = useState("")
    const [umidade, setUmidade] = useState("")
    const [nuvens, setNuvens] = useState("")
    const [icone, setIcone] = useState("unknown")
    const [desc, setDesc] = useState("")
    const [tipo, setTipo] = useState("")

    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")

    let apikey = "0c0cea5e747de54561069cf0e28e25a8";
    // let apikey = "8ba2b45dc05d3fc8ac59f8c48e2f0540"

    function getClima(cidade) {
        api.get(`weather?q=${cidade}&appid=${apikey}&units=metric&lang=pt_br`)
            .then(res => {
                const { name } = res.data
                const { lon, lat } = res.data.coord
                const { temp, temp_max, temp_min, humidity } = res.data.main
                const { all } = res.data.clouds
                const { icon, description, main } = res.data.weather[0]
                setNome(name)
                setLat(lat)
                setLon(lon)
                setTemp(temp + "°C")
                setTempMax(temp_max + "°C")
                setTempMin(temp_min + "°C")
                setNuvens(all + "%")
                setUmidade(humidity + "%")
                setIcone(icon)
                setDesc(description.charAt(0).toUpperCase() + description.slice(1))
                setTipo(main)
            })
    }

    let classe;

    if (tipo == "Clear") {
        classe = "yellow"
    } else if (tipo == "Clouds" || tipo == "Mist") {
        classe = "grey"
    } else if (tipo == "Rain" || tipo == "Snow" || tipo == "Thunderstorm") {
        classe = "blue"
    }

    function handleClick() {
        getClima(cidade)
    }

    return (
        <div className="tudo">

            <div className="caixa">
                <div className="esq">
                    <div className="boxInput">
                        <input
                            placeholder="Pesquise..."
                            className="pesquisa"
                            value={cidade}
                            onChange={(ev) => setCidade(ev.target.value)}
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleClick()
                                }
                            }}
                        />
                        <input
                            type="button"
                            className="botao"
                            value=""
                            onClick={handleClick} />
                    </div>

                    <div className="boxClima">
                        <div className="titulo">
                            <hr />
                            <h2>{nome}</h2>
                            <hr />
                        </div>
                        <div className="infos">
                            <div>
                                <p>Umidade :</p>
                                <p>{umidade}</p>
                            </div>
                            <div>
                                <p>Temperatura :</p>
                                <p>{temp}</p>
                            </div>
                            <div>
                                <p>Nuvens :</p>
                                <p>{nuvens}</p>
                            </div>
                            <div>
                                <p>Temperatura Máx.:</p>
                                <p>{tempMax}</p>
                            </div>
                            <div>
                                <p>Temperatura Mín.:</p>
                                <p>{tempMin}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="linha" />

                <div className={`dir ${classe}`}>
                    <div className="boxDesc">
                        <img src={`./icons/${icone}.png`} alt="Icone" />
                        <h2>{desc}</h2>
                    </div>
                </div>
            </div>

        </div>




        /* <div className="calendBox">
            <div>
                <h3>Amanhã</h3>
            </div>
            <div>
                <h3>Depois</h3>
            </div>
            <div>
                <h3>Depois</h3>
            </div>

        </div> */

    )
}

// import React, { useState } from "react";
// import api from "../../services/api"
// import lupa from '../../assets/lupa.png';

// export default function Main(){
//   const [city, setCity] = useState("")
//   const [temp, setTemp] = useState("")
//   const [min ,setMin] = useState("")
//   const [max, setMax] = useState("")
//   const [pressure, setPressure] = useState("")
//   const [humidity, setHumidity] = useState("")


//   function handleClick(){
//     api.get("weather?q="+city+"&appid=0c0cea5e747de54561069cf0e28e25a8")