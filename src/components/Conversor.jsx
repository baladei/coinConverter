import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";

export function Conversor (props) {

    const [input, setInput] = useState (0)
    const [convertido, setConvertido] = useState (0)

    let dePara = `${props.moedaA}-${props.moedaB}`

    async function handleSearch (){

    useEffect(() => {
        api
            .get({dePara})
            .then((response) => setConvertido(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });     
    }, []);}

    const valorMoeda = {input} * {convertido};

    return (
        <div className="conversor">

            <h1>Conversor de Moedas</h1>
            <h2>{props.moedaA} para {props.moedaB}</h2>

                <input
                type="text"
                onChange={(event) => setInput(event.target.value)}                
                />
                <button className="searchButton" onClick={handleSearch}>Converter</button>
                <h2>{convertido.bid}</h2>
        </div>
    );
}