import {createContext, useState} from 'react'

const ContextPeliculas = createContext()

function ContextMovie({children}) {
     // mostrar activa que se vea el popUp
     const [mostrar, setMostrar] = useState(false)
  // objeto popUp almacena la informacion de la pelicula cuando le dan dobleClick
  const [objetoPopUp, setObjetoPopUp] = useState({})
  // estado para guardar las peliculas cuando le den click al my list
  const [favoritos, setFavoritos] = useState([])
  //mostrarLista es el array que se muestra cuando le dan click a my list
  const [mostrarLista, setMostrarLista] = useState(false)

  // muestra el pop up con la pelicula que fue seleccionada.
  function obtenerPelicula(movie){
    
    setObjetoPopUp(movie)
    setMostrar(true)
   
  };

  function cerrarPopUp(){
    setMostrar(false)
  }
  
  // crear el array con las peliculas que el usuario agrego 
  function agregarLista(pelicula){
    
    setFavoritos([...favoritos, pelicula])
    setMostrarLista(true)
    
  }

  return (
    <ContextPeliculas.Provider value={{obtenerPelicula, agregarLista, objetoPopUp, cerrarPopUp,  mostrar, mostrarLista, favoritos}}>
      {children}
    </ContextPeliculas.Provider>
  )
}

export default ContextPeliculas
export {ContextMovie}

