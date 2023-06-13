import Navegacion from '../components/Navegacion'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const ContenedorHome = styled.div`
width: 90%;
display: grid;
margin-top: 65px;
margin: 0 auto;
margin-top: 50px;
`
const Hero = styled.div`
width: 100%;
height: 540px;
background-image: url('../images/headerInicio.jpg');
background-size: cover;
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
position: relative;
`

const Overlay = styled.div`
width: 100%;
background-color: #0000008f ;
position: absolute;
height: 100%;
top: 0;
`
const ContenidoHero = styled.div`
z-index: 10;
margin-top: 60px;
`
const TextoHero = styled.h2`
color: white;
font-size: 54px;
font-size: 700;
margin-left: 35px;
margin-bottom: 13px;
padding: 0;
`


const SubtituloHero = styled.h4`
color: #e2dfdf;
font-size: 24px;
margin: 0;
padding: 0;
margin-left: 35px;

`
const ContenedorBotones = styled.div`
display: flex;
gap: 20px;
margin-bottom: 15px;
margin-top: 25px;
margin-left: 35px;
 `
const Boton = styled.div`
 cursor: pointer;
 font-weight: 700;
 color: #fff;
 outline: none;
 border: none;
 border-radius: 8px;
 text-align:center;
 padding-right: 24px;
 padding-left: 24px;
 padding-top: 5px;
 padding-bottom: 5px;
 text-decoration: none;
 
 
 background-color: rgba(51, 51, 51, 0.596);
 transition: all 0.3s ease-in-out;

 @media (min-width:992px) {
    font-size: 18px;
    padding-right: 34px;
    padding-left: 34px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-right: 0px;
}
 
 &:hover{
    color:#000;
    background-color: #e6e6e6;
 }
 `

function HeroInicio() {
  return (
    <>
      <Navegacion/>
     <ContenedorHome>
        <Hero>
            <Overlay></Overlay>
            <ContenidoHero>
                <TextoHero>Películas y series ilimitadas</TextoHero>
                <SubtituloHero>Disfruta donde quieras. Cancela cuando quieras</SubtituloHero>
                <ContenedorBotones>
                  <Link to={'/login'}>
                    <Boton>Iniciar sesión</Boton>
                  </Link>
                  <Link to={'/registrarse'}>
                  <Boton>Registrarse</Boton>
                  </Link>
                </ContenedorBotones>
            </ContenidoHero>
          
        </Hero>
     </ContenedorHome>
    </>
  )
}

export default HeroInicio
