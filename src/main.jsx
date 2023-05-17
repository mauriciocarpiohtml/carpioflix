import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextMovie } from './context/ContextMovie'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import UsuarioPage from './pages/UsuarioPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Registrarse from './pages/Registrarse'

const router = createBrowserRouter([
  {path:'/', element:<Home/>},
  {path:'/usuario', element:<UsuarioPage/>},
  {path:'/login', element:<Login/>},
  {path:'/registrarse', element:<Registrarse/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <ContextMovie>
     <RouterProvider router={router}>
        <App />
     </RouterProvider>
   </ContextMovie>
  
)
