import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
width: 100%;
height: 35px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
z-index: 10;




@media (min-width:768px) {
  height: 45px;

}

`

const Logo = styled.h3`
font-size: 20px;
color: #c70b0b;
padding:6px;
margin-left: 20px;
text-transform: uppercase;
font-weight: 900;

@media (min-width:768px) {
  font-size: 29px;
  margin-left: 40px;

}
`


function Navegacion() {
  return (
    <div>
        <Nav>
            <Logo>netflix</Logo>
             
        </Nav>
    </div>
  )
}

export default Navegacion
