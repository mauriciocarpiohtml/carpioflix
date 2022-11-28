import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Pelicula from './Pelicula'

const Contenedor = styled(motion.div)`
margin: 0 auto;
 width: 95%; 

/* min-height: 160px; */
overflow: hidden;
`
const Slider = styled(motion.div)`
cursor: grab;
display: flex;
gap: 18px;
`
const TextoPopulares = styled.h3`
color: #e5e5e5;
font-weight: 700;
text-transform: uppercase;
font-size: 16px;
margin-left: 45px;
`

function Populares() {

    const [peliculasArray, setPeliculasArray] = useState([])

    useEffect(() => {
        async function cargarTendencias(){
            const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=0c0e61be0331e6cfb82fb0431bd5542d'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const peliculas = resultado.results
            const top10 = peliculas.splice(0, 10)
            setPeliculasArray(top10)
            
        }
        cargarTendencias()
      }, []); 

      // asi se hace la peticion a la imagen https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  return (
    <>
    <TextoPopulares>Las 10 mas populares en Argentina</TextoPopulares>
    <Contenedor>
      <Slider drag='x' dragConstraints={{right:0, left:-1418}}>
      {peliculasArray.map((movie=>
        <Pelicula 
        movie={movie}
        key={movie.id}/>))}
      </Slider>
      
    </Contenedor>
    </>
  )
}

export default Populares
