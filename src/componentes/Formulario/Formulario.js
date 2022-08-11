import CampoTexto from '../CampoTexto/CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

export const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Degisn',
        'Mobile',
        'Inovação e Gestão'

    ]

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log('form foi submetido')
    } 

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatiorio={true} label="Nome" placeholder="Digite seu Nome"></CampoTexto>
                <CampoTexto obrigatiorio={true} label="Cargo" placeholder="Digite seu Cargo"></CampoTexto>
                <CampoTexto obrigatiorio={true} label="Imagem" placeholder="Informe o endereço da imagem"></CampoTexto>
                <ListaSuspensa obrigatiorio={true} itens={times} label="Time"></ListaSuspensa>
                <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}