 const http=require('node:http')
 const {findAvailablePort}=require('./puertoLibre.js')

//DESIREDPORT O ALGO ASI MIJIn 

const desiredPort=process.env.PORT ?? 1234


const server=http.createServer((rreq,res)=>{

    console.log('peticiion recibida',rreq.url)
    res.end('hola dato')
})

// findAvailablePort(desiredPort)
//  .then(

//     port=>{
        server.listen(desiredPort,()=>{//solo para probar el favuco ico

            console.log(`escuchando en el puerto http://localhost:${desiredPort} `)
        })

//     }

//  )

//curl http:localhost:xxxx 