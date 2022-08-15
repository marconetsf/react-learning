import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {

    const aoSelecionado = (event) =>
    {
        props.aoAlterado(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
                <select onChange={aoSelecionado} required={props.required}>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </label>
        </div>

    )
}