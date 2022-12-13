import React from 'react'
import styled from 'styled-components'

const ContenedorPop = styled.div`
  position: fixed; /* Posición fija en la pantalla */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.87); 
  z-index: 9999; 
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 70vh;
  border-radius: 4px;
  overflow: scroll;

  @media(min-width: 992px) {
    width: 50%;
    overflow: hidden;
    height: 85vh;
  }

`

const ImagenPopUp = styled.img`
width: 100%;
height: 50vh;
object-fit: cover;
padding: 0;
margin: 0;

`
const ContenidoPopUp = styled.div`
width: 100%; 
display: flex;
flex-direction: column;
position: relative;

`
const Flex = styled.div`
display:flex;
flex-direction: column;
@media(min-width:768px){
  display:flex;
  flex-direction: row;
}
`

const ContenedorInformacion = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 90%;
padding: 12px; 

@media(min-width:992px){
  display:flex;
  width: 50%;
}`

const ContenedorInfoSecundaria = styled.div`
display: flex;
justify-content:center;
align-items:center;
width: 90%;
padding: 4px;
flex-direction:column;


@media(min-width:992px){
  padding: 12px;
  width: 50%;
}
`

const TituloPelicula = styled.h3`
text-align:center;
margin-top:8px;
font-size:20px;
font-weight:700;
color:#ece8e8;
margin-bottom: 0;

@media(min-width:992px){
  font-size: 24px;
}
`
const InfoPelicula = styled.p`
color:#ece8e8d5;
line-height: 1.5;
font-size: 14px;
text-align: center;

@media(min-width:992px){
  font-size: 16px;
  margin-top: 10px;
}
`

const IconoCerrar= styled.svg`
position: absolute;
width: 25px;
height: 25px;
fill: white;
right: 10px; /* Mover el icono 10 píxeles hacia la derecha del contenedor */
top: 10px;
cursor: pointer;


&:hover {
    fill: #e227277f;
  }
  @media(min-width: 768px){
    width: 22px;
    height: 22px;
  }
`

const Boton = styled.div`
 cursor: pointer;
 font-weight: 700;
 color: #fff;
 outline: none;
 border: none;
 border-radius: 4px;
 text-align:center;
 padding-right: 24px;
 padding-left: 24px;
 padding-top: 5px;
 padding-bottom: 5px;
 margin-bottom: 15px;
 background-color: rgba(51,51,51, 0.5);
 transition: all 0.3s ease-in-out;

 @media (min-width:992px) {
    font-size: 18px;
    padding-right: 34px;
    padding-left: 34px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-right: 0px;
}
 
 &:hover{
    color:#000;
    background-color: #e6e6e6;
 }
 `


function PopUp({objetoPopUp, cerrarPopUp, agregarLista}) {

    const{original_title, backdrop_path, overview, title, release_date} = objetoPopUp
  return (
    <ContenedorPop>
        <ContenidoPopUp>
        <ImagenPopUp
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}/>
            
            <Flex>
            
                <ContenedorInformacion>
                    <TituloPelicula>{original_title ? original_title : title}</TituloPelicula>
                    <InfoPelicula>{overview}</InfoPelicula>
                </ContenedorInformacion>

                
                    {release_date ? (
                        <ContenedorInfoSecundaria>
                            <InfoPelicula>Published in: {release_date}</InfoPelicula>
                            <Boton 
                            onClick={()=> agregarLista(objetoPopUp)}>Add to my list</Boton>
                            
                        </ContenedorInfoSecundaria>
                    ) : ""}
                    
                
            </Flex>
            
        </ContenidoPopUp>
        <IconoCerrar
        onClick={cerrarPopUp} 
        xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></IconoCerrar>

        

    </ContenedorPop>
  )
}

export default PopUp
