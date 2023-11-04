import Perfil from '../../assets/imagens/Perfil.jpeg'
import Usuario1 from '../../assets/imagens/Perfil_Luckysalamander.jpg'
import Usuario2 from '../../assets/imagens/Perfil_Vocesabia.jpg'
import Usuario3 from '../../assets/imagens/Perfil_Brksedu.jpg'
import Usuario4 from '../../assets/imagens/Perfil_Alanzoka.jpg'
import Usuario5 from '../../assets/imagens/Perfil_Einerd.jpg'
import HeaderDireito from './HeaderDireito'
import Sugestoes from './Sugestoes'
import './LateralDireita.css'

export default function LateralDireita(){
    return(
        <div className="LateralDireita">
           
            <HeaderDireito userImg4={<img src={Perfil}/>} userName4='maicola_sz' name='Maicoln Sousa'/>

            <div className='ConteinerSugestoes'>
                <div className="titleSugestoes">
                    <p className='colorCinza strong'>Sugestões para você</p>
                    <p className='textAlternative strong2'>Ver tudo</p>
                </div>

                <Sugestoes imgUsuarios={<img src={Usuario1}/>} nameUsuarios='theluckysalamander' texto='Segue você'/>
                <Sugestoes imgUsuarios={<img src={Usuario2}/>} nameUsuarios='vocesabiavideo' texto='Seguido(a) por '/>
                <Sugestoes imgUsuarios={<img src={Usuario3}/>} nameUsuarios='brksedu' texto='Seguido(a) por '/>
                <Sugestoes imgUsuarios={<img src={Usuario4}/>} nameUsuarios='alanzoka' texto='Seguido(a) por '/>
                <Sugestoes imgUsuarios={<img src={Usuario5}/>} nameUsuarios='einerd.com.br' texto='Sugestões para você'/>
            </div>

            <div className='FooterDireito textAlternative'>
                <p>
                    <a href="#">Sobre</a> • <a href="#">Ajuda</a> • <a href="">Imprensa</a> • <a href="#">API</a> • <a href="#">Carreiras</a> • <a href="#">Privacidade</a> • <a href="#">Termos</a> • <a href="#">Localizações</a> • <a href="#">Idioma</a> • <a href="#">Meta Verified</a>  
                </p>
                <p>&copy; 2023 INSTAGRAM FROM META </p>
            </div>
        </div>
    )
}