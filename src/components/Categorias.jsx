
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SliderMovies from './SliderMovies'


const ContenedorCategoria = styled.div`
display: flex;
justify-content: space-between;
width: 95%;

`
const Categoria = styled.div`
display:flex;
gap: 18px;`

const GeneroActivo = styled.button`
 height: 36px;
border-radius: 4px;
border: none;
background-color: #c70b0b;
color: #e5e5e5;
font-weight: 700;
width: 90px;
cursor: pointer;
`

const Genero = styled.button`
 height: 36px;
border-radius: 4px;
border: solid 1px #c70b0b;
background-color: transparent;
color: #e5e5e5;
font-weight: 700;
width: 90px;
cursor: pointer;
transition-property: all;
transition-duration: .4s;

    :hover{
        background-color: #c70b0b
    }
`

const TextoCategoria = styled.h3`
color: #e5e5e5;
font-weight: 700;
text-transform: uppercase;
font-size: 16px;
margin-left: 45px;

`

function Categorias() {
  const todos = 'all'
  const comedia =  35 //35
  const drama = 18 // 18
  const accion = 28 // 28

  const [arrayCategorias, setArrayCategorias] = useState([])
  
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([])
   
  let mostrarCategorias ;
  // console.log(mostrarCategorias)

  useEffect(() => {
    async function cargarCategoria(){
        const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=0c0e61be0331e6cfb82fb0431bd5542d'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        const peliculas = resultado.results
        const top = peliculas.splice(10, 20)
      
       setArrayCategorias(top)
        
    }
    
    cargarCategoria()
  }, []); 
  
 
   

 async function actualizarCategorias(genero){

  const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=0c0e61be0331e6cfb82fb0431bd5542d'
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()
  const peliculas = resultado.results
  
  
  //filtrar array por accion 
  if(isNaN(genero)){
    setPeliculasFiltradas(peliculas)
    return
  }
  else if(genero == 28){
    const peliculasAccion = peliculas.filter(peli => peli.genre_ids.includes(28) )
    setPeliculasFiltradas(peliculasAccion)
    return
    
  } else if( genero == 18){
    const peliculasDrama = peliculas.filter(peli => peli.genre_ids.includes(18) )
    setPeliculasFiltradas(peliculasDrama)
    return
}  else{
    const peliculasComedia = peliculas.filter(peli => peli.genre_ids.includes(35) )
    setPeliculasFiltradas(peliculasComedia)
  }
  
  }
  mostrarCategorias = arrayCategorias
  if(peliculasFiltradas.length > 0){
    mostrarCategorias = peliculasFiltradas 
  }
  // 
  
  return (
    <>
      <ContenedorCategoria>
        <TextoCategoria>Selecciona una categoria</TextoCategoria>
        <Categoria>
          <Genero
            onClick={()=>actualizarCategorias(todos)}>All</Genero>
          <Genero
            onClick={()=>actualizarCategorias(comedia)}>Comedy</Genero>
          <Genero 
            onClick={()=>actualizarCategorias(drama)}>Drama</Genero>
          <Genero 
            onClick={()=>actualizarCategorias(accion)}>Action</Genero>
        </Categoria>
      </ContenedorCategoria>

      <SliderMovies
        peliculasArray={mostrarCategorias}
      />
        
    </>
  )

}
export default Categorias
