// const http = require('node:http')

// const { findAvailablePort } = require('./free_port')
// const desiredPort = process.env.PORT ?? 12345
// const server = http.createServer((req, res) => {
//   console.log('peticion recibida ', req.url)

//   res.end('el contrato')
// })

// findAvailablePort(desiredPort)
//   .then(
//     port => {
//       server.listen(port, () => {
//         console.log(`escuchando en http://localhost:${port}`)
//       })
//     }
//   )

const http = require('node:http')

// const { findAvailablePort } = require('./free_port')
const desiredPort = process.env.PORT ?? 12345

const processRequest = (req, res) => {
  // console.log('peticion recibida ', req.url)

  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    res.end('bienvenido a mi página de inti ')
  }
  // res.end('el contrato')
}

const server = http.createServer(processRequest)

// findAvailablePort(desiredPort)
//   .then(
//     port => {
server.listen(desiredPort, () => {
  console.log(`escuchando en http://localhost:${desiredPort}`)
})
//     }
//   )

/// /////////77https://youtu.be/YmZE1HXjpd4?t=1378////////////7
/// ////////////////////////////////////////////////////////777
