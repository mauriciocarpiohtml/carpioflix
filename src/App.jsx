import { useState } from 'react'
import Navegacion from './components/Navegacion'
import Populares from './components/Populares'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegacion/>
      <Populares/>
    </>
  )
}

export default App

