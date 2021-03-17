import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

// import your icons
import { faVirus, faHome, faHeadSideMask, faHeadSideCough } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sobre() {
  const [activeItem, setItem] = useState("Sobre");
  const router = useRouter();
  return (
    <div className="divMae">
      <div className="navigationBar">
        <div onClick={()=>{router.push('./')}} className="navigationText">Inicio</div>
        <div onClick={()=>{router.push('./sobre')}} className="navigationText">Sobre</div>
        <FontAwesomeIcon className="navigationIcon" style={{width: 25, height: 25}} icon={faHeadSideMask}/>
        <div onClick={()=>{router.push('./sintomas')}} className="navigationText">Sintomas</div>
        <div onClick={()=>{router.push('./perfil')}} className="fotoDePerfil"></div>
      </div>
      <div className="cuidadosBackground">
        <div className="sobreAdjust">
          <FontAwesomeIcon style={{width: 35, height: 35, color: '#F1F9F4'}} icon={faHeadSideMask}/>
          <div className="sobre">Cuidados</div>
        </div>
          <div className="sobreTextBox">
            <div className="sobreTitleBox">Cuidados</div>
            <div className="sobreText2">Utilizar máscara</div>
            <div className="sobreText2">Evitar sair de casa</div>
            <div className="sobreText2">Utilizar álcool em gel</div>
            <div className="sobreText2">Lavar as mãos com frequência</div>
            <div className="sobreText2">Não compartilhar objetos de uso pessoal</div>
            <div className="sobreText2">Manter distanciamento de 1,5m</div>
          </div>
      </div>
    </div>
  )
}
