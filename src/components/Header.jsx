import React from 'react'
import styled from 'styled-components'
import { useEffect, useState, useContext } from 'react'
import ContextPeliculas from '../context/ContextMovie'
import solicitudes from '../solicitudes'

const ContenedorHeader = styled.div`
position: relative;
width:100%;
height: 50vh;
overflow: hidden;

@media (min-width:992px) {
    height: 80vh;

}
`

const ImagenHeader = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

@media (min-width:992px) {

  height: auto;

}
`

const Overlay = styled.div`
width: 100%;
background-color: #00000071 ;
position: absolute;
height: 100%;
top: 0;
`
const Degradado = styled.div`
width: 100%;
position: absolute;
bottom: 0%;
height: 38px;

background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37,37,37, 0.61),
    #111
);
@media (min-width:768px) {

height: 65px;
bottom: 0;
height: 25px;

}



`
const ContenedorTexto = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
position:absolute;
top: 25%;

width: 70%;
margin-left: 15px;
/* margin-top: 50px; */

@media (min-width:992px) {
    padding: 20px;
    width: 35%;
    margin-left: 25px;
    

}
 `

const TituloPelicula = styled.h2`
font-weight: 900;
font-size:22px;
color:#ece8e8;
text-transform:uppercase;
margin: 0;

@media (min-width:768px) {
    font-size:30px;
}

`


const ParrafoPelicula = styled.p`
font-weight: 500;
color:#e5e5e5;
line-height: 1.5;
margin-top: 0;
font-size: 12.5px;

@media (min-width:768px) {
    font-size: 18px;
    

}
`

const ContenedorBotones = styled.div`
display: flex;
gap: 20px;
margin-bottom: 15px;
margin-top: 15px;
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



function Header() {
    const {obtenerPelicula, agregarLista} = useContext(ContextPeliculas)

    const [objetoBanner, setObjetoBanner] = useState({})

    const URL_BASE= 'https://api.themoviedb.org/3'

    useEffect(()=>{
        async function BuscarPortada(){
            const url = `${URL_BASE}${solicitudes.populares}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)
            const numeroAleatorio = parseInt(Math.random()*15)
            const pelicula = resultado.results[numeroAleatorio]
            setObjetoBanner(pelicula)
            
        }
        BuscarPortada()
    },[])
  return (
    <ContenedorHeader>
        <ImagenHeader src={`https://image.tmdb.org/t/p/original${objetoBanner.backdrop_path}`}/>
        <Overlay> </Overlay>
        <Degradado></Degradado>
            
                
                {Object.entries(objetoBanner).length>0 && (
                    <ContenedorTexto>
                        <TituloPelicula> 
                            {objetoBanner.title || objetoBanner.name || objetoBanner.original_name}
                        </TituloPelicula>
                        <ContenedorBotones>
                            <Boton 
                                onClick={()=> obtenerPelicula(objetoBanner)}>Play</Boton>
                            <Boton 
                                onClick={()=> agregarLista(objetoBanner)}> My List</Boton>
                        </ContenedorBotones>
                        <ParrafoPelicula>{objetoBanner.overview.split(" ").slice( 0, 35).join(" ")}</ParrafoPelicula>
                    </ContenedorTexto>
                )}
                
                
                
            
       
    </ContenedorHeader>
  )
}

export default Header
