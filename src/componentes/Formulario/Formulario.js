import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

export const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Degisn',
        'Mobile',
        'Inovação e Gestão'

    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatiorio={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}>
                </CampoTexto>

                <CampoTexto
                    obrigatiorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}>
                </CampoTexto>

                <CampoTexto
                    obrigatiorio={true}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}>
                </CampoTexto>

                <ListaSuspensa
                    obrigatiorio={true}
                    itens={times}
                    label="Time"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}>
                </ListaSuspensa>
                
                <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}