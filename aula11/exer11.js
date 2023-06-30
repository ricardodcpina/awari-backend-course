const express = require('express')
const app = express()
const PORT = 3333

app.get('/', (req, res) => {
    res.status(200)
    res.json('GET route')
})

app.post('/', (req, res) => {
    res.status(200)
    res.json('POST route')
})

app.put('/', (req, res) => {
    res.status(200)
    res.json('PUT route')
})

app.delete('/', (req, res) => {
    res.status(200)
    res.json('DELETE route')
})

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})