/* const http = require('node:http')

const servidor = http.createServer((req, resp) => {
  console.log(' petición recibida ....')
  resp.end('Hola mundo')
})

servidor.listen(3001, () => {
  console.log('escuchando en el puerto 30001^^')
})
  */

/*
const http = require('node:http')

const servidor = http.createServer((req, resp) => {
  console.log(' petición recibida ....')
  resp.end('Hola mundo')
})

servidor.listen(0, () => {
  console.log('escuchando en el puerto ????')
})
*/

// recuperar el puerto randómico
/*
const http = require('node:http')

const servidor = http.createServer((req, resp) => {
  console.log(' petición recibida ....')
  resp.end('Hola mundo')
})

servidor.listen(0, () => {
  console.log(`escuchando en el puerto ${servidor.address().port}`)

  //
const http = require('node:http')
const servidor = http.createServer((req, resp) => {
  console.log('recibido la pericion')
  resp.end('hola mundo')
})

servidor.listen(0, () => {
  console.log(`escuchando en el puerto http://localhost:${servidor.address().port}`)
})
  //
// // })
// // })
// // })

// // })
// // })
  // // })
// // })

*//*
const http = require('node:http')
const servidor = http.createServer((req, resp) => {
  console.log('peticion recibida')
  resp.end('holi mindo')
})

servidor.listen(0, () => {
  console.log(`esuchando es el puerto aleatorio http://localhost:${servidor.address().port}`)
})
*/

//
// // })
// // })
// // })

// // })
// // })
// // })
// // })
// froma unica http
const http = require('node:http')
const server = http.createServer((req, resp) => {
  console.log('recibiendo peticion')
  resp.end('holi mundo')
})
server.listen(0, () => {
  console.log(`escuchando en el puerto http://localhost:${server.address().port}`)
})
