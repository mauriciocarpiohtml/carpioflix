import React from 'react'
import styled from 'styled-components'
import netflix1 from '../images/tvInicio.png'
import netflix2 from '../images/tvInicio2.png'

const ContenedorInfo = styled.div`
padding: 25px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-bottom: 2px white;

@media (min-width:992px) {
  flex-direction: row;
  margin-top: 25px;
}
`

const LineaInferior = styled.div`
  width: 50%;
  border-bottom: 2px solid white;
  margin-top: 5px;
  margin: 0 auto;
`

const ContenedorTexto = styled.div`
max-width: 90%;
text-align: center;
@media (min-width:992px) {
  max-width: 65%;
}
`
const Imagen = styled.img`
width: 100%;

@media (min-width:992px) {
  max-width: 45%;
}
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
         <Imagen src={netflix1} alt='Banner Imagen tv' width='100%'/>
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
        <Imagen src={netflix2} alt='Banner Imagen tv'/>
      </ContenedorInfo>
    <LineaInferior></LineaInferior>  
    </>
  )
}

export default Banner
