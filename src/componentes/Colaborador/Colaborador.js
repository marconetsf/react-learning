import './Colaborador.css'

export const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/marconetsf.png' alt='Foto individual do colaborador'></img>
            </div>
            <div className='rodape'>
                <h4>Marcone Tenorio</h4>
                <h5>Tech Lead</h5>
            </div>
        </div>
    )
}