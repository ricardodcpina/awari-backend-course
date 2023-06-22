const http = require('http')
const PORT = 8080

http.createServer((req, res) => {
    res.write('HTTP version comparison with Express')
    res.end()
}).listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})