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
        <div onClick={()=>{router.push('./cuidados')}} className="navigationText">Cuidados</div>
        <FontAwesomeIcon className="navigationIcon" style={{width: 30, height: 30}} icon={faHeadSideCough}/>
        <div onClick={()=>{router.push('./perfil')}} className="fotoDePerfil"></div>
      </div>
      <div className="sintomasBackground">
        <div className="sobreAdjust">
          <FontAwesomeIcon style={{width: 45, height: 45, color: '#F1F9F4'}} icon={faHeadSideCough}/>
          <div className="sobre">banaana</div>
        </div>
          <div className="sobreTextBox">
            <div className="sobreTitleBox">Sintomas</div>
            <div className="sobreText2">Febre</div>
            <div className="sobreText2">Tosse seca</div>
            <div className="sobreText2">Cansaço</div>
            <div className="sobreText2">Dores de cabeça</div>
            <div className="sobreText2">Perda de paladar</div>
            <div className="sobreText2">Dificuldade na hora de respirar</div>
          </div>
      </div>
    </div>
  )
}
