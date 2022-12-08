import { useState } from "react";

export function Conversor (props) {

    const [input, setInput] = useState ('')
    const [convertido, setConvertido] = useState (0)

    let dePara = `${props.moedaA}-${props.moedaB}`
    let url = `http://economia.awesomeapi.com.br/json/last/${dePara}`

    async function converter () {

        try{
          const response = await fetch(url);
          const res = await response.json();
          const valor = await fetch(res.bid);
          const resultado = await valor.json();
          console.log(resultado);
        } catch {
        }
    }

    return (
        <div className="conversor">

            <h1>Conversor de Moedas</h1>
            <h2>{props.moedaA} para {props.moedaB}</h2>

                <input
                type="text"
                onChange={(event) => setInput(event.target.value)}                
                />
                <button className="searchButton" onClick={converter}>Converter</button>
                <h2>{resultado}</h2>
        </div>
    )
}