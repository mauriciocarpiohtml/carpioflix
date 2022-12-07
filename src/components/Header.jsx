import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const ContenedorHeader = styled.div`
position: relative;
width:100%;
height: 75vh;
`

const ImagenHeader = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: relative;
`

const Overlay = styled.div`
width: 100%;
background-color: #0000005e ;
position: absolute;
height: 100%;
top: 0;
`
const ContenedorTexto = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
position:absolute;
top: 0;

width: 35%;
margin-left: 25px;
margin-top: 30px;

 `


const TituloPelicula = styled.h2`
font-weight: 900;
font-size:30px;
color:#ece8e8;
text-transform:uppercase;
`


const ParrafoPelicula = styled.p`
font-weight: 500;
color:#e5e5e5;
line-height: 1.5;
margin-top: 0;
font-size: 18px;
`

function Header() {
    const [objetoBanner, setObjetoBanner] = useState({})

    useEffect(()=>{
        async function BuscarPortada(){
            const url = 'https://api.themoviedb.org/3/movie/505642?api_key=0c0e61be0331e6cfb82fb0431bd5542d'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setObjetoBanner(resultado)
            // const {backdrop_path, original_title} = resultado
            
        }
        BuscarPortada()
    },[])
  return (
    <ContenedorHeader>
        <ImagenHeader src={`https://image.tmdb.org/t/p/original${objetoBanner.backdrop_path}`}/>
        <Overlay> </Overlay>
            <ContenedorTexto>
                <TituloPelicula>{objetoBanner.original_title}</TituloPelicula>
                <ParrafoPelicula>Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.</ParrafoPelicula>
            </ContenedorTexto>
            
       
    </ContenedorHeader>
  )
}

export default Header
