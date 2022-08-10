import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CampoTexto label="Nome" placeholder="Digite seu Nome"></CampoTexto>
      <CampoTexto label="Cargo" placeholder="Digite seu Cargo"></CampoTexto>
      <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"></CampoTexto>
    </div>
  );
}

export default App;
