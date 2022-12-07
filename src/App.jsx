
import Navegacion from './components/Navegacion'
import Populares from './components/Populares'
import Categorias from './components/Categorias'
import Header from './components/Header'
import solicitudes from './solicitudes'
import Filas from './components/Filas'

function App() {

  return (
    <>
      <Navegacion/>
      <Header/>
      {/* <Populares 
      />
      <Categorias 
      /> */}
       <Filas
        titulo='Top peliculas en Argentina'
        fetchUrl={solicitudes.populares}/>
        <Filas
        titulo='Accion'
        fetchUrl={solicitudes.peliculasAccion}/>
        <Filas
        titulo='Comedia'
        fetchUrl={solicitudes.peliculasComedia}/>
        <Filas
        titulo='Terror'
        fetchUrl={solicitudes.peliculasTerror}/>
        <Filas
        titulo='Drama'
        fetchUrl={solicitudes.peliculasDrama}/>
    </>
  )
}

export default App

