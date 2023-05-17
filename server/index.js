const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const conectarDB = require('./db/data')
 const usuario = require('./routes/usuarioRouter')

const app = express()

dotenv.config()
app.use(express.json())

app.use(cors())

conectarDB()

// RUTAS

 app.use('/api/usuarios', usuario )



app.listen(3050, () => {
    console.log(`Escuchando en el puerto 3050`)
  })