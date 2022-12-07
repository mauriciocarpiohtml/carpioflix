import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import SliderMovies from './SliderMovies'


const TextoPopulares = styled.h3`
color: #e5e5e5;
font-weight: 700;
text-transform: uppercase;
font-size: 16px;
margin-left: 45px;
`

function Populares({detectarPelicula}) {

    const [peliculasArray, setPeliculasArray] = useState([])
    

    useEffect(() => {
        async function cargarTendencias(){
            const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=0c0e61be0331e6cfb82fb0431bd5542d'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const peliculas = resultado.results
            const top10 = peliculas.splice(0, 15)
          
           setPeliculasArray(top10)
            
        }
        cargarTendencias()
      }, []); 

      // asi se hace la peticion a la imagen https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  return (
    <>
    <TextoPopulares>Top en Argentina</TextoPopulares>
    <SliderMovies 
      peliculasArray= {peliculasArray}
      detectarPelicula= {detectarPelicula}/>
    </>
  )
}

export default Populares
