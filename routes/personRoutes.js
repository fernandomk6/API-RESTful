const router = require('express').Router()
const Person = require('../models/Person')

// Criação de dados.
router.post('/', async (req, res) => {
  const { name, salary, approved } = req.body
  const person = { name, salary, approved }

  if (!name) {
    res.status(422).json({ error: 'O nome é obrigatório!' })
    return
  }

  try {
    await Person.create(person)
    
    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    return
  } catch (error) {
    res.status(500).json({ error })
    return
  }
})

// Leitura de dados.
router.get('/', async (req, res) => {
  try {
    const people = await Person.find()

    res.status(200).json(people)
    return
  } catch (error) {
    res.status(500).json({ error })
    return
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const person = await Person.findOne({ _id: id })

    if (!person) {
      res.status(422).json({ message: 'O usuário não foi encontrado!' })
      return
    }
    res.status(200).json(person)
    return
  } catch (error) {
    res.status(500).json({ error })
    return
  }
})

/**
 * Atualização de dados.
 * PUT: Atualiza o objeto completo
 * PATCH: Faz uma atualização parcial do objeto
 */
router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const { name, salary, approved } = req.body
  const person = { name, salary, approved }

  try {
    const updatedPerson = await Person.updateOne({_id: id}, person)
    
    if (updatedPerson.matchedCount === 0) {
      res.status(422).json({ message: 'O usuário não foi encontrado!' })
      return
    }

    res.status(200).json(person)
    return
  } catch (error) {
    res.status(500).json({ error })
    return
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const person = await Person.findOne({ _id: id })

  if (!person) {
    res.status(422).json({ message: "Usuário não encontrado!" })
    return
  }
  
  try {
    await Person.deleteOne({ _id: id })
    res.status(200).json({ message: "Usuário removido com sucesso!" })
    return
  } catch (error) {
    res.status(500).json({ error })
    return
  }

})

module.exports = router
