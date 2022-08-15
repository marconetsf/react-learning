import Colaborador from '../Colaborador'
import './Time.css'

export const Time = ({ colaboradores, corSecundaria, corPrimaria, nome }) => {

    const css = { backgroundColor: corSecundaria }

    return (
        colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>
                {nome}
            </h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador key={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}
            </div>
        </section>

    )
}