const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' })

    let fileData = fs.readFileSync('./exer8.txt', 'utf-8')
    res.write(fileData)
    res.end()

}).listen(8000)

console.log('Server up and running.')