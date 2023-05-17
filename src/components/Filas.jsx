import styled from "styled-components"
import SliderMovies from './SliderMovies'
import { useState, useEffect} from "react"

const Texto = styled.h3`
color: #e5e5e5;
font-weight: 700;
text-transform: uppercase;
font-size: 16px;
margin-left: 20px;

@media (min-width:768px) {
  margin-left: 45px;

}

`
function Filas({titulo, fetchUrl}) {

   

    const [peliculasArray, setPeliculasArray] = useState([])
    const URL_BASE= 'https://api.themoviedb.org/3'

    useEffect(() => {
        async function cargarPeliculas(){
            const url = `${URL_BASE}${fetchUrl}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const peliculas = resultado.results
            const top15 = peliculas.splice(0, 15)
          
           setPeliculasArray(top15)
            
        }
        cargarPeliculas()
      }, []); 

  return (
    <div>
      <Texto>{titulo}</Texto>
      <SliderMovies peliculasArray={peliculasArray}/>
   </div>
  )
  }


export default Filas
