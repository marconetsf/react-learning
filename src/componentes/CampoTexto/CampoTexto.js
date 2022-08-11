import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const [valor, setValor] = useState('')
    
    const aoDigitado = (event) => {
        setValor(event.target.value);
        console.log(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatiorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto