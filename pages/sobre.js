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
        <FontAwesomeIcon className="navigationIcon" style={{width: 25, height: 25}} icon={faVirus}/>
        <div onClick={()=>{router.push('./cuidados')}} className="navigationText">Cuidados</div>
        <div onClick={()=>{router.push('./sintomas')}} className="navigationText">Sintomas</div>
        <div onClick={()=>{router.push('./perfil')}} className="fotoDePerfil"></div>
      </div>
      <div className="sobreBackground">
        <div className="sobreAdjust">
          <FontAwesomeIcon style={{width: 35, height: 35, color: '#F1F9F4'}} icon={faQuestionCircle}/>
          <div className="sobre">Sobre</div>
        </div>
          <div className="sobreTextBox">
            <div className="sobreTitleBox">Covid-19</div>
            <div className="sobreText2">O Covid-19 é um novo vírus que tem causado doenças respiratórias leves a moderadas.</div>
            <div className="sobreTitleBox">Brasil</div>
            <div className="sobreText2">Atualmente a quantidade aproximada de mortes por Covid-19 no Brasil é de 278.229</div>
          </div>
      </div>
    </div>
  )
}
