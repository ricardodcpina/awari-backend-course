const express = require('express')
const mongoose = require('mongoose')
const models = require('./models')

const app = express()
const PORT = 3333
const DATABASE_URL = 'mongodb://localhost:27017/aula14'

app.use(express.json())

const main = async () => {
    await mongoose.connect(DATABASE_URL)

    app.listen(PORT, () => {
        console.log("Server up and running")
    })
}

app.get('/', async (req, res) => {
    const users = await models.User.find()

    res.status(200).json(users)
})

app.post('/', async (req, res) => {
    const { email } = req.body

    const user = new models.User({ email })

    await user.save()

    res.status(201).json(user)
})

app.put('/:id', async (req, res) => {
    const { id } = req.params
    const { email } = req.body

    const user = await models.User.findByIdAndUpdate(
        { _id: id }, { email }, { new: true })

    res.status(200).json(user)
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params

    await models.User.deleteOne({ _id: id })

    res.status(200).json({ deleted: true })
})

main()