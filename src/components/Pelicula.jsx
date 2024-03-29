import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { useContext } from 'react'
import ContextPeliculas from '../context/ContextMovie'

const MarcoPeli  = styled(motion.div)`
    min-height: 200px;
    max-height: 200px;
    min-width:250px;
    max-width: 250px;
    border-radius:8px;
    transition-property: all;
    transition-duration: .4s;
    
    
    :hover{
        transform: scale(1.1);
        
    }
    `

const ImagenPelicula = styled.img`
height: 100%;
width: 100%;
border-radius:8px;
pointer-events: none;
position: relative;
`



function Pelicula({movie}) {

  const {obtenerPelicula} = useContext(ContextPeliculas)

  return (
  
    <MarcoPeli 
      onDoubleClick={ ()=> obtenerPelicula(movie)}>
      <ImagenPelicula
      
       src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
      
    </MarcoPeli>

      




      
  
  )
}

export default Pelicula
