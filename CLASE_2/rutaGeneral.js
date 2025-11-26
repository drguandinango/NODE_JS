//datos congruentes...acerca de el http para verificr el res.url y comprobarlo con el curl
const http=require('node:http')

const{findAvailablePort}=require('./puertoLibre.js')

const desiredPort=process.env.PORT ?? 12334

const server= http.createServer((req,res)=>{

    console.log('petición recibida:',req.url)
    res.end('datoss pasados por x laya')
   // console.log('mora es el mas propppp')
       
})

findAvailablePort(0)
    .then(
        port=>{
            server.listen(desiredPort,()=>{
                    console.log(`escuchando en  http://localhost:${desiredPort}`)
            })
        }
    )