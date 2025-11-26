const http=require('node:http')

const{findAvailablePort}=require('./puertoNet.js')

const desiredPort=process.env.PORT ?? 12345

const server=http.createServer((req,res)=>{

    console.log('peticion recibida',req.url)
    res.end('hola momunditox')
//https://youtu.be/YmZE1HXjpd4?t=1519
    //  if(req.url==='/'){//<-----------/////URLLL///////////////////////

    //     res.statusCode=200//ok
    //     res.setHeader('content-Type','text/plain')
    //     res.end('saludito de parte del davio')
    //  }

})


// findAvailablePort(desiredPort)
//     .then(
//         port=>{

            server.listen(desiredPort,()=>{

                console.log(`esuchando en http://localhost:${desiredPort}`)
            })
    //     }
    // )