
import Navegacion from './components/Navegacion'
import Populares from './components/Populares'
import Categorias from './components/Categorias'
import Header from './components/Header'
import solicitudes from './solicitudes'
import Filas from './components/Filas'
import PopUp from './components/PopUp'
import MiLista from './components/MiLista'
import { useState } from 'react'


function App() {
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
    <>
      <Navegacion/>
      <Header 
        obtenerPelicula={obtenerPelicula}
        agregarLista={agregarLista}/>
      
      {mostrar && <PopUp
        objetoPopUp={objetoPopUp}
        cerrarPopUp={cerrarPopUp}
        agregarLista={agregarLista} />}

      {/* este componente recibe un array con las peliculas que el usuario agrego a my list al darle click */}
      {mostrarLista && <MiLista 
                        favoritos={favoritos}
                        obtenerPelicula={obtenerPelicula}/>}
       <Filas
        titulo='Top peliculas en Argentina'
        fetchUrl={solicitudes.populares}
        obtenerPelicula={obtenerPelicula}
        />
        <Filas
        titulo='Accion'
        fetchUrl={solicitudes.peliculasAccion}
        obtenerPelicula={obtenerPelicula}
       />
        <Filas
        titulo='Comedia'
        fetchUrl={solicitudes.peliculasComedia}
        obtenerPelicula={obtenerPelicula}
        />
        <Filas
        titulo='Terror'
        fetchUrl={solicitudes.peliculasTerror}
        obtenerPelicula={obtenerPelicula}
        />
        <Filas
        titulo='Drama'
        fetchUrl={solicitudes.peliculasDrama}
        obtenerPelicula={obtenerPelicula}
        />
    </>
  )
}

export default App

