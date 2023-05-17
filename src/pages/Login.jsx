import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navegacion from '../components/Navegacion'


const Background = styled.div`
width : 100vw;
height: 100vh;
background-image: url('../src/images/headerInicio.jpg');
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Overlay = styled.div`
width: 100%;
background-color: #00000092 ;
position: absolute;
height: 100%;
top: 0;
`
const ContenedorForm = styled.div`
position: absolute;
  top: 50;
  left: 50;
  background-color: #000000cf;
  width: 25vw;
  height: 50vh;
  z-index: 10;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`

const Titulo = styled.h3`
font-size: bold;
color:white;
text-align:center;
font-size:22px;
text-align: left;
margin-top: 25px;
margin-bottom: 10px;
`
const Formulario = styled.form`
padding: 5px;
display: flex;
flex-direction: column;
gap: 15px;
width: 100%;
`

const Input = styled.input`
border-radius: 8px;
border: 0;
padding: 14px;
margin-top: 10px;
`

const Boton = styled.button`
border-radius: 8px;
border: 0;
padding: 14px;
margin-top: 10px;
background-color: #e50914;
color: white;
font-weight: 700;
text-align: center;
font-size: 17px;
cursor: pointer;
`

const Enlace = styled.p`
text-align: center;
font-size: 14px;
color: #a7a7a7;
text-decoration: none;
`

function Login() {

  //navegacion
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [dataUsuario, setDataUsuario] = useState({})

  async function handleFormulario(e){
    e.preventDefault()

    if(email && password == ''){
      alert('Todos los campos son obligatorios')
      return
    }
    try {
        const response = await fetch('http://localhost:3050/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log(data)
        // setDataUsuario(data._id);

         if (data._id) {
             navigate('/usuario')
         }
    } catch (error) {
        console.log(error);
    }
}



  return (
    <>
    <Navegacion/>
      <Background>
        <ContenedorForm>
          <Titulo>Inicia sesión</Titulo>
          <Formulario>
            <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Correo@gmail.com'/>
            <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'/>
            <Boton
             onClick={handleFormulario}>
              Iniciar Sesion
            </Boton>
            <Link to='/registrarse'>
              <Enlace>Registrarse</Enlace>
            </Link>
            
          </Formulario>
        </ContenedorForm>
      </Background>
      <Overlay> </Overlay>
    </>
  )
}

export default Login
