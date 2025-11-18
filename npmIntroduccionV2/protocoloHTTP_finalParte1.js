const http=require('node:http')

const {findAvailablePort}=require('./puertoLibre.js')

const desiredPort=process.env.PORT ?? 3000

const servidor=http.createServer((req,resp)=>{

    console.log('peticion recibida')
    resp.end('hola world')


})


findAvailablePort(desiredPort).then(

    port=>{
        servidor.listen(port,()=>{

            console.log(`server listening on por http://localhost:${port}`)
        })
    }
)