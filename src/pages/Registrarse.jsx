import Navegacion from "../components/Navegacion"
import styled from "styled-components"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router"


const Background = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Titular = styled.h3`
font-weight: 700;
color: #333;
text-align: center;
font-size: 24px;
margin-top: 90px;
`
const Contenedor = styled.div`
width: 75vw;
display: flex;
flex-direction: column;
padding: 12px;

@media (min-width:772px) {
  width: 35vw;
}
`

const Formulario = styled.form`
width: 100%;
`

const Input= styled.input`
border-radius: 8px;
border: 1px solid #33333350;
padding: 18px;
margin-top: 10px;
display: block;
width: 90%;
`

const Boton= styled.button`
width: 100%;
border-radius: 8px;
border: 0;
padding: 18px;
margin-top: 10px;
display: block;
background-color: #e50914;
color: white;
font-weight: 700;
text-transform: uppercase;
text-align: center;
cursor: pointer;
`


function Registrarse() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function crearUsuario(e){
    e.preventDefault()
    if(email && password == ''){
      alert('Todos los campos son obligatorios')
      return
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/registrar`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });

      const data = await response.json()
      
      if( data.msg === 'Usuario creado correctamente'){
        navigate('/login')
      }
      
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <>
      <Navegacion/>
      <Background>
        <Contenedor>
         <Titular>Crea una constraseña y comienza tu membresia</Titular>
         <Formulario>
          <Input
          value={email}
           onChange={(e) => setEmail(e.target.value)}
           type='email'
           placeholder="Ingresa tu email"/>
           <Input
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           type='password'
           placeholder="Ingresa tu password"/>
           <Boton onClick={crearUsuario}>Siguiente</Boton>
         </Formulario>

        </Contenedor>
      </Background>
    </>
  )
}

export default Registrarse
