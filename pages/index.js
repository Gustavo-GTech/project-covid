import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

// import your icons
import { faVirus, faHome, faHeadSideMask, faHeadSideCough } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const [activeItem, setItem] = useState("Home");
  const router = useRouter();
  return (
    <div className="divMae">
      <div className="navigationBar">
        <FontAwesomeIcon className="navigationIcon" style={{width: 25, height: 25}} icon={faHome}/>
        <div onClick={()=>{router.push('./sobre')}} className="navigationText">Sobre</div>
        <div onClick={()=>{router.push('./cuidados')}} className="navigationText">Cuidados</div>
        <div onClick={()=>{router.push('./sintomas')}} className="navigationText">Sintomas</div>
        <div onClick={()=>{router.push('./perfil')}} className="fotoDePerfil"></div>
      </div>
      <div className="content">
        <div className="homeText">Covid vem matando mais a cada dia, conscientize você e sua família</div>
      </div>
      <div className="infoBoxAdjust">
        <div className="sobreInfoBox">
          <FontAwesomeIcon className="virusIcon" style={{width: 35, height: 35}} icon={faVirus}/>
          <div className="sobreTitle">Sobre</div>
          <div className="sobreText">Veja informações sobre o vírus.</div>
        </div>
        <div className="cuidadosInfoBox">
          <FontAwesomeIcon className="cuidadosIcon" style={{width: 35, height: 35}} icon={faHeadSideMask}/>
          <div className="cuidadosTitle">Cuidados</div>
          <div className="cuidadosText">Veja dicas, recomendações e cuidados contra a contração do vírus.</div>
        </div>
        <div className="sintomasInfoBox">
          <FontAwesomeIcon className="sintomasIcon" style={{width: 45, height: 45}} icon={faHeadSideCough}/>
          <div className="sintomasTitle">Sintomas</div>
          <div className="sintomasText">Veja os tipos de sintomas mais comuns.</div>
        </div>
      </div>
    </div>
  )
}
