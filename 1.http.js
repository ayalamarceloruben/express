const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (req.url === '/') {
        res.statusCode = 200 // OK
        res.end('<h1>Mi página</h1>')
    } else if (req.url === '/imagen.png') {
        res.setHeader('Content-Type', 'image/png')

        fs.readFile('./placa.png', (err) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal server error</h1>')
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else if(req.url === './contacto') {
        res.end('<h1>Contacto</h1>')
    } else {
        res.statusCode = 404 // Not Found
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})