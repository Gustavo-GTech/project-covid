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
        <div onClick={()=>{router.push('./sintomas')}} className="navigationText">Sintomas</div>
        <div className="fotoDePerfil"></div>
      </div>
      <div className="perfilBackground">
        <div className="sobreAdjust">
          <FontAwesomeIcon style={{width: 35, height: 35, color: '#F1F9F4'}} icon={faQuestionCircle}/>
          <div className="sobre">Sobre mim</div>
        </div>
          <div className="sobreTextBox">
            <div className="sobreTitleBox">Gustavo</div>
            <div className="sobreText2">Tenho 15 anos, moro no estado de Santa Catarina atualmente estou estudando na escola Sesi Senai no 1°Ano do Ensino Médio.</div>
            <div className="sobreText2">Gosto de escutar música (indie, pop), jogar e programar.</div>
          </div>
      </div>
    </div>
  )
}
