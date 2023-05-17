import React from 'react'
import styled from 'styled-components'
import SliderMovies from './SliderMovies.jsx'
import { useContext } from 'react'
import ContextPeliculas from '../context/ContextMovie'


const Texto = styled.h3`
color: #e5e5e5;
font-weight: 700;
text-transform: uppercase;
font-size: 16px;
margin-left: 45px;
`

const Contenedor = styled.div`
margin: 0 auto;
 width: 95%; 
overflow: hidden;
padding-bottom: 7px;
`

const Flex = styled.div`
cursor: grab;
display: flex;
gap: 18px;
flex: wrap;
`

function MiLista() {
  const {favoritos, obtenerPelicula} = useContext(ContextPeliculas)
  return (
    <div>
        <Texto>My list</Texto>
        <SliderMovies 
          peliculasArray={favoritos}
          obtenerPelicula ={obtenerPelicula} />
       
        
    </div>
  )
}

export default MiLista

