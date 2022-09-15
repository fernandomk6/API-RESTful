// Configuração inicial.
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Forma de ler JSON.
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// Rotas da API.
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// Rota inicial.
app.get('/', (req, res) => {

  // Mostrar req.
  res.json({ message: 'Oi express' })

})

// Entregar uma parta.
const DB_USER = encodeURIComponent(process.env.DB_USER)
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.op777ku.mongodb.net/?retryWrites=true&w=majority`
    )
  .then(() => {
    console.log('Connectado ao MongoDB!')
    app.listen(3000)

  })
  .catch(err => console.log(err))