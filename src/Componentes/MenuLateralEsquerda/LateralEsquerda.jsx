import NomeLogo from '../../assets/imagens/logo-instagram-nome.png'
import Perfil from '../../assets/imagens/Perfil.jpeg'
import ItemMenuLateralEsquerda from './ItemMenuLateralEsquerda'
import MenuResponsivo from './MenuResponsivo'
import './LateralEsquerda.css'

import {AiFillHome} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {ImCompass2} from "react-icons/im";
import {BsCameraReels} from "react-icons/bs"; 
import { RiMessengerLine } from 'react-icons/ri'
import {AiOutlineHeart} from "react-icons/ai";
import {CgAddR} from "react-icons/cg";
import {HiOutlineBars3} from "react-icons/hi2";
import {BsInstagram} from "react-icons/bs";


export default function LateralEsquerda(){
    return(
        <div className="LateralEsquerda"> 
            <div className="logoLateralEsquerda">
                <a href="#"><img src= {NomeLogo} alt="Logo do Instagram"/></a>  
            </div>
            <div className='logoPc2'>
                <span><BsInstagram className="iconeSimples"/></span>
            </div>
            

            <div> 
                <div className="menuLateralEsquerda">
                    <ul className='menuPc'>
                        <ItemMenuLateralEsquerda icone= {<AiFillHome className="iconeSimples"/> } texto="Página Inicial"/>
                        <ItemMenuLateralEsquerda icone= {<BsSearch className="iconeSimples"/>} texto="Pesquisar"/>
                        <ItemMenuLateralEsquerda icone= {<ImCompass2 className="iconeSimples"/>} texto="Explorar"/>
                        <ItemMenuLateralEsquerda icone= {<BsCameraReels className="iconeSimples"/>} texto="Reels"/>
                        <ItemMenuLateralEsquerda icone={<RiMessengerLine className="iconeSimples"/>} texto="Mensagens"/>
                        <ItemMenuLateralEsquerda icone={<AiOutlineHeart className="iconeSimples"/>} texto="Notificações"/>
                        <ItemMenuLateralEsquerda icone={<CgAddR className="iconeSimples"/>} texto="Criar"/>
                        <ItemMenuLateralEsquerda icone={<img src={Perfil} alt="" className="iconeSimples"/>} texto="Perfil"/>
                        <div className='button_more'>
                            <ItemMenuLateralEsquerda icone={<HiOutlineBars3 className="iconeSimples"/>} texto="Mais"/>
                        </div>
                    </ul>
                </div>
                <div className='menuLateralEsquerda2'>
                    <MenuResponsivo/>
                </div>
            </div>
                
        </div>
       
    )
}

