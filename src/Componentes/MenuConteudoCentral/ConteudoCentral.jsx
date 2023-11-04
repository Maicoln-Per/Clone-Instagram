import './ConteudoCentral.css'
import ItensStories from './ItensStories'
import Perfil from '../../assets/imagens/Perfil.jpeg'
import fotoStorie1 from '../../assets/imagens/Perfil.jpeg'
import fotoStorie2 from '../../assets/imagens/Perfil_Proa.png'
import fotoStorie3 from '../../assets/imagens/Perfil_Jaja.jpg'
import fotoStorie4 from '../../assets/imagens/Perfil_Gabs.jpg'
import fotoStorie5 from '../../assets/imagens/Perfil_Meta.png'
import fotoStorie6 from '../../assets/imagens/Perfil_Cursoemvideo.png'
import fotoStorie7 from '../../assets/imagens/Perfil_Umbu.jpg'
import fotoStorie8 from '../../assets/imagens/Perfil_Netflix.png'

import Post from './Post'
import HeaderPost from './HeaderPost'
import ImagemPost from './ImagemPost'

import Usuario1 from '../../assets/imagens/imagem_usuariomanobrown.jpg' 
import Usuario2 from '../../assets/imagens/imagem_usuarioneymar.jpg'
import Usuario3 from '../../assets/imagens/imagem_usuariomarkzuckerberg.jpg'
import Usuario4 from '../../assets/imagens/Perfil_Messi.jpeg'
import Usuario5 from '../../assets/imagens/Perfil_Gojo.jpg'
import Usuario6 from '../../assets/imagens/Perfil_Zenitsu.jpg'

import ImagemPost1 from '../../assets/imagens/imagem_Postmanobrown.jpg' 
import ImagemPost2 from '../../assets/imagens/imagem_Postneymar.jpg'
import ImagemPost3 from '../../assets/imagens/imagem_Postmarkzuckerberg.jpg'
import ImagemPost4 from '../../assets/imagens/imagem_Postproa.jpg' 
import ImagemPost5 from '../../assets/imagens/imagem_Postmessi.jpg' 
import ImagemPost6 from '../../assets/imagens/imagem_Postgojo.jpg' 
import ImagemPost7 from '../../assets/imagens/imagem_Postumbu.png' 
import ImagemPost8 from '../../assets/imagens/imagem_Postlofi.jpg' 

import ButtonsPost from './ButtonsPost'
import {AiOutlineHeart} from "react-icons/ai";
import {TbMessageCircle2} from "react-icons/tb";
import {PiPaperPlaneTiltBold} from "react-icons/pi";
import {RiBookmarkLine} from "react-icons/ri";
import CurtidasPost from './CurtidasPost'
import DescricaoPost from './DescricaoPost'
import FooterPost from './FooterPost'
import ComentariosPost from './ComentarioPost'

export default function ConteudoCentral(){
    return(

        <div className="ConteudoCentral">
            <div className='conteinerStories'>
            <div className="Stories">
                <ItensStories fotoStorie={<img src={fotoStorie1}/>} nomeStorie='maicola_sz'/>
                <ItensStories fotoStorie={<img src={fotoStorie2}/>} nomeStorie='instituto.proa'/>
                <ItensStories fotoStorie={<img src={fotoStorie3}/>} nomeStorie='jailsoncsantos'/>
                <ItensStories fotoStorie={<img src={fotoStorie4}/>} nomeStorie='gab.augustoz'/>
                <ItensStories fotoStorie={<img src={fotoStorie5}/>} nomeStorie='meta'/>
                <ItensStories fotoStorie={<img src={fotoStorie6}/>} nomeStorie='cursoemvideo'/>
                <ItensStories fotoStorie={<img src={fotoStorie7}/>} nomeStorie='sejaumbu'/>
                <ItensStories fotoStorie={<img src={fotoStorie8}/>} nomeStorie='netflix'/>
            </div>
            </div>

            <div className="TimeLine">

            <Post>
                    <HeaderPost userImg={<img src={fotoStorie2}/>} userName='instituto.proa' postDate='5 d'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost4}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='1.480' texto='Curtidas'/>

                    <DescricaoPost userName='institutoproa' texto='🚀 DÊ O START NA SUA CARREIRA EM TECH: INSCRIÇÕES ABERTAS PARA A NOVA TURMA PROPROFISSÃO SP!'/>

                    <FooterPost todos_comentarios='79'>
                        <ComentariosPost userName3='drickis.maria' comentario='Equipe Incrível!'/>
                    </FooterPost>
                   
                </Post>

                <Post>
                    <HeaderPost userImg={<img src={fotoStorie7}/>} userName='sejaumbu' postDate='1 m'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost7}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='608' texto='Curtidas'/>

                    <DescricaoPost userName='sejaumbu' texto='Bem-vindo ao futuro da jardinagem! 🌱💚🍃'/>

                    <FooterPost todos_comentarios='43'>
                        <ComentariosPost userName3='martinha.ti' comentario='💚💚💚💚'/>
                    </FooterPost>
                   
                </Post>

                <Post>
                    <HeaderPost userImg={<img src={Usuario6}/>} userName='zenitsu' postDate='10 h'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost8}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='30' texto='Curtidas'/>

                    <DescricaoPost userName='zenitsu' texto='zzzz'/>

                    <FooterPost todos_comentarios='7'>
                        <ComentariosPost userName3='mr.jackson' comentario='Hi bro!'/>
                    </FooterPost>
                   
                </Post>

                <Post>
                    <HeaderPost userImg={<img src={Usuario4}/>} userName='leomessi' postDate='2 d'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost5}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='16.854.660' texto='Curtidas'/>

                    <DescricaoPost userName='leomessi' texto='Solo tengo palabras de agradecimiento para toda la gente de todo el mundo que tanto me apoyó durante mi carrera y a quienes quiero dedicar de manera especial este premio, junto con mi familia que siempre estuvo a mi lado.'/>

                    <FooterPost todos_comentarios='292.630'>
                        <ComentariosPost userName3='joel.https' comentario='Merecedor de tudo!'/>
                    </FooterPost>
                   
                </Post>

                <Post>
                    <HeaderPost userImg={<img src={Usuario5}/>} userName='satoro.gojo' postDate='2 sem'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost6}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='34.568' texto='Curtidas'/>

                    <DescricaoPost userName='satoro.gojo' texto='Vazio: Roxo 🟪'/>

                    <FooterPost todos_comentarios='240'>
                        <ComentariosPost userName3='yuji.itadori' comentario='Achei que você seria a melhor pessoa para me treinar porque falam que é o mais forte. Eu quero ser forte. Me ensina!'/>
                    </FooterPost>
                   
                </Post>

                <Post>
                    <HeaderPost userImg={<img src={Usuario1}/>} userName='manobrown' postDate='2 d'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost1}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='122.660' texto='Curtidas'/>

                    <DescricaoPost userName='manobrown' texto='A nossa luta é todo dia, sem férias, sem descanso.'/>

                    <FooterPost todos_comentarios='5.770'>
                        <ComentariosPost userName3='racionaiscn' comentario='Na adrenalina ⚡️🌧️'/>
                    </FooterPost>
                   
                </Post>

                <Post>
                    <HeaderPost userImg={<img src={Usuario2}/>} userName='neymarjr' postDate='1 sem'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost2}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='5.720.118' texto='Curtidas'/>

                    <DescricaoPost userName='neymarjr' texto='FÉ 🙏'/>

                    <FooterPost todos_comentarios='180'>
                        <ComentariosPost userName3='cristiano' comentario='Eu sou o milior'/>
                    </FooterPost>
                    
                </Post>


                <Post>
                    <HeaderPost userImg={<img src={Usuario3}/>} userName='zuck' postDate='6 h'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost3}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='2.548.376' texto='Curtidas'/>

                    <DescricaoPost userName='zuck' texto='The biggest risk is not taking any risk. In a world thats changing quickly, the only strategy that is guaranteed to fail is not taking risks.'/>

                    <FooterPost todos_comentarios='28.970'>
                        <ComentariosPost userName3='maicola_sz' comentario='Sou lindo'/>
                    </FooterPost>
                    
                </Post>
            </div>
        </div> 
    )
}