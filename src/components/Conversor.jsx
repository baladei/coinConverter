import { useState } from "react";

export function Conversor (props) {

    const [input, setInput] = useState (0)
    const [convertido, setConvertido] = useState (0)

    let dePara = `${props.moedaA}-${props.moedaB}`
    const url = "http://economia.awesomeapi.com.br/json/last/"

    function valorMoeda () {
        fetch(url`${dePara}`)
            .then( response => console.log (response.json()))
            .catch( error => console.error (error))
    }

    valorMoeda ()

    
    return (
        <div className="conversor">

            <h1>Conversor de Moedas</h1>
            <h2>{props.moedaA} para {props.moedaB}</h2>

                <input
                type="text"
                onChange={(event) => setInput(event.target.value)}                
                />
                <button className="searchButton">Converter</button>
                <h2>{url}{dePara}</h2>
        </div>
    );
}