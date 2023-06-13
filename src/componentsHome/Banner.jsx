import React from 'react'
import styled from 'styled-components'

const ContenedorInfo = styled.div`
padding: 25px;
margin-top: 25px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
border-bottom: 2px white;
`

const LineaInferior = styled.div`
  width: 50%;
  border-bottom: 2px solid white;
  margin-top: 5px;
  margin: 0 auto;
`

const ContenedorTexto = styled.div`
max-width: 65%;
`

const TituloBanner = styled.h3`
font-size: 30px;
font-weight: 700;
color: white;
`
const SubtituloBanner = styled.p`
margin-top: 5px;
font-size: 20px;
color: white;
`



function Banner() {
  return (
    <>
      <ContenedorInfo>
         <img src='src/images/tvInicio.png' alt='Banner Imagen tv'/>
        <ContenedorTexto>
         <TituloBanner>Disfruta donde quieras</TituloBanner>
         <SubtituloBanner>Películas y series ilimitadas en tu teléfono, tablet, <br/>computadora y TV sin costo adicional.</SubtituloBanner>
        </ContenedorTexto>
      </ContenedorInfo>

    <LineaInferior></LineaInferior>
      <ContenedorInfo>
        <ContenedorTexto>
         <TituloBanner>Disfruta en tu TV</TituloBanner>
         <SubtituloBanner>Ve en smart TV, PlayStation, Xbox, Chromecast, <br/> Apple TV, reproductores de Blu-ray y más.</SubtituloBanner>
        </ContenedorTexto>
        <img src='src/images/tvInicio2.png' alt='Banner Imagen tv'/>
      </ContenedorInfo>
    <LineaInferior></LineaInferior>  
    </>
  )
}

export default Banner
