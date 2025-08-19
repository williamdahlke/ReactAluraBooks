import './App.css';
import Logo from './components/Logo';
import sacola from './imagens/sacola.svg';
import perfil from './imagens/perfil.svg';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [sacola, perfil]

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          {
            textoOpcoes.map((texto) => (<li className='opcao'><p>{texto}</p></li>))
          }
        </ul>

        <ul className='icones'>
          {
            icones.map((imagem) => (<li className='icone'><img src={imagem}></img></li>))
          }
        </ul>
        
      </header>
    </div>
  );
}

export default App;
