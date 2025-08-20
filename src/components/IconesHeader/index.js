import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';
import './estilo.css'

const icones = [sacola, perfil]

function IconesHeader(){
    return (
        <ul className='icones'>
          {
            icones.map((imagem) => (<li className='icone'><img src={imagem}></img></li>))
          }
        </ul>
    )
}

export default IconesHeader