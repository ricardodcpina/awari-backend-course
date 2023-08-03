const { PrismaClient } = require('@prisma/client')
const express = require('express')

const app = express()
const PORT = 3333

const prisma = new PrismaClient()

app.use(express.json())

app.get('/', async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json({ users })
})

app.post('/', async (req, res) => {
    const { email } = req.body

    const user = await prisma.user.create({
        data: { email }
    })

    res.status(201).json({ user })
})

app.put('/:id', async (req, res) => {
    const { id } = req.params
    const { email } = req.body

    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { email }
    })

    console.log(user)

    res.status(200).json({ user })
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params

    const user = await prisma.user.delete({
        where: { id: parseInt(id) }
    })

    res.status(200).json({ user })
})

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})