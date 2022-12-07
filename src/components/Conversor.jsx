import { useState } from "react";

export function Conversor (props) {

    const [input, setInput] = useState ('')
    const [convertido, setConvertido] = useState (0)

    function converter () {
      let dePara = `${props.moedaA}-${props.moedaB}`
      let url = `http://economia.awesomeapi.com.br/json/last/${dePara}`
  
      fetch(url).then( response=> {response.json()})
      .then( json => {let cotacao = json.dePara.bid;
        let valorMoeda = (parseFloat({input} * {cotacao}).toFixed)
    })}

    return (
        <div className="conversor">

            <h1>Conversor de Moedas</h1>
            <h2>{props.moedaA} para {props.moedaB}</h2>

                <input
                type="text"
                onChange={(event) => setInput(event.target.value)}                
                />
                <button className="searchButton" onClick={converter}>Converter</button>
                <h2>{convertido}</h2>
        </div>
    )
}