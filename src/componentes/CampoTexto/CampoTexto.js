import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {    
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatiorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto