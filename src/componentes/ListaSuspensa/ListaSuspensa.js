import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
                <select required={props.required}>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
            </label>
        </div>

    )
}