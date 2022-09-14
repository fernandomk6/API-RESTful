// Configuração inicial.
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

// Forma de ler JSON.
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// Rotas da API.
app.post('/person', async (req, res) => {

  // req.body
  // { name: "matheus", salary: 5000, approved: true }
  const { name, salary, approved } = req.body
  const person = { name, salary, approved }

  if (!name) {
    res.status(422).json({ error: 'O nome é obrigatório!' })
  }

  // create do mongoose
  try {

    // criando dados
    await Person.create(person)
    
    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })

  } catch (error) {
    res.status(500).json({ error: error })
  }


})

// Rota inicial.
app.get('/', (req, res) => {

  // mostrar req
  res.json({ message: 'Oi express' })

})


// Entregar uma parta.
const DB_USER = encodeURIComponent('fernandomk6')
const DB_PASS = encodeURIComponent('fBmTwKz$dwH!3n@')

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.op777ku.mongodb.net/?retryWrites=true&w=majority`
    )
  .then(() => {
    console.log('Connectado ao MongoDB!')
    app.listen(3000)

  })
  .catch(err => console.log(err))