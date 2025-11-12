/*
const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
*/
/*
const net = require('node:net')
// permite preguntar si el server esta abierno ono y perm//
// y me permite levantarlo

function findAvalaiblePort (desiredPort) {
  return
  new Promise()
  /// quedado ahi
  // https://youtu.be/yB4n_K7dZV8?t=7938
}
*/
