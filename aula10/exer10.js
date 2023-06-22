const express = require('express')
const app = express()
const PORT = 8080

app.get('/firstExpress', (req, res) => {
    res.send('First experience using Express Framework!')
}).listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})