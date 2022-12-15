import { useState } from "react";

export function Conversor (props) {

    const [input, setInput] = useState (0)
    const [convertido, setConvertido] = useState (0)

    let dePara = `${props.moedaA}-${props.moedaB}`
    const url = "http://economia.awesomeapi.com.br/json/last/"

    function getContent () {
        fetch(`${url}${dePara}`)
            .then( response => response.json())
            .then ( data => setConvertido.textContent = JSON.stringify(data))
            .catch( error => console.error (error))
    }
    
    function getCoin () {
        fetch(`${url}${dePara}`)
            .then ( response => response.json())
            .then ( data => {
                return setConvertido.textContent = JSON.stringify(data.USDBRL.bid)
            })
            .catch ( error => console.error (error))
        }

    const resultadoMoeda = parseFloat(input * convertido) 

    return (
        <div className="conversor">

            <h1>Conversor de Moedas</h1>
            <h2>{props.moedaA} para {props.moedaB}</h2>

                <input
                type="text"
                onChange={(event) => setInput(event.target.value)}                
                />
                <button className="searchButton" onClick={getCoin}>Converter</button>
                <h2>{resultadoMoeda}</h2>
        </div>
    );
}