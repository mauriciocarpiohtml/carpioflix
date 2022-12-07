import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Pelicula from './Pelicula'

const Contenedor = styled(motion.div)`
margin: 0 auto;
 width: 95%; 
overflow: hidden;
padding-bottom: 35px;
`
const Slider = styled(motion.div)`
cursor: grab;
display: flex;
gap: 18px;
`

function SliderMovies({peliculasArray}) {
  return (
    <Contenedor>
      <Slider drag='x' dragConstraints={{right:0, left:-3353}}>
      {peliculasArray.map((movie=>
        <Pelicula 
        movie={movie}
        key={movie.id}
        />))}
      </Slider>
      
    </Contenedor>
  )
}

export default SliderMovies
