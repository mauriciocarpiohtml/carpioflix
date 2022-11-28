import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
width: 100%;
height: 45px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;
`

const Logo = styled.h3`
font-size: 29px;
color: #c70b0b;
padding:9px;
margin-left: 40px;
text-transform: uppercase;
font-weight: 900;
`

const ContenedorItems = styled.ul`
display:flex;
padding:9px;
margin-right: 50px;
list-style: none;
justify-content: center;
align-items: center;
`
const Items = styled.li`
text-decoration: none;
font-weight: 700;
color: #e5e5e5;
margin-right: 25px;
`

const Buscador = styled.input`
border-radius: 7px;
padding: 5px;
border: 1px solid #e5e5e558 ;
background-color:transparent;

::placeholder {
  
  text-align: center;
}

`


function Navegacion() {
  return (
    <div>
        <Nav>
            <Logo>carpioflix</Logo>
            <ContenedorItems>
                <Items>Home</Items>
                <Items>Whislist</Items>
                <Buscador 
                placeholder='Search a movie'/>
            </ContenedorItems>
        </Nav>
    </div>
  )
}

export default Navegacion
