import React from 'react'
import Navegacion from '../components/Navegacion'
import Header from '../components/Header'
import solicitudes from '../solicitudes'
import Filas from '../components/Filas'
import PopUp from '../components/PopUp'
import MiLista from '../components/MiLista'
import { useState, useContext} from 'react'
import ContextPeliculas from '../context/ContextMovie'


function UsuarioPage() {

    const {mostrar, mostrarLista} = useContext(ContextPeliculas)
  return (
    
    <>
      <Navegacion/>
      <Header/>
      
       {mostrar && <PopUp/>} 

      {/* este componente recibe un array con las peliculas que el usuario agrego a my list al darle click */}
       {mostrarLista && <MiLista/>}
        <Filas
        titulo='Top peliculas en Argentina'
        fetchUrl={solicitudes.populares}
        />
        <Filas
        titulo='Accion'
        fetchUrl={solicitudes.peliculasAccion}
       />
        <Filas
        titulo='Comedia'
        fetchUrl={solicitudes.peliculasComedia}
        />
        <Filas
        titulo='Terror'
        fetchUrl={solicitudes.peliculasTerror}
        />
        <Filas
        titulo='Drama'
        fetchUrl={solicitudes.peliculasDrama}
        />  
    </>
    
  )
}

export default UsuarioPage
