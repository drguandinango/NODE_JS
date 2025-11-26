 
 
 ///////////discrimiar URLS

 
 
 
//  const http=require('node:http')
//  const {findAvailablePort}=require('./puertoLibre.js')


// const desiredPort=process.env.PORT ?? 12345


// const server=http.createServer((req,res)=>{

//   // console.log('peticiion recibida',rreq.url)PASO UNO QUIATR ESTO
//   //paso 2 agrgare esto
// if(req.url ==='/'){

// res.statusCode=200//ok}

// res.setHeader('content-Type','text/plain')
// res.end('beinvenido a  mi pagina de inciio')

// }              //ARREGLAR QUE SE ACTALLIZCE EL CODE MIENTREAS ESTA CODIFICANDO
// //node --watch https.js 
    
// })

// // findAvailablePort(desiredPort)
// //  .then(

// //     port=>{
//         server.listen(desiredPort,()=>{//solo para probar el favuco ico //curl http:localhost:xxxx 

//             console.log(`escuchando en el puerto http://localhost:${desiredPort} `)
//         })

// //     }

// //  )
















//curl http:localhost:xxxx 


 ///////////discrimiar URLS


  ///////////discrimiar URLS

   ///////////discrimiar URLS

// v


 ///////////discrimiar URLS


  ///////////discrimiar URLS

const http=require('node:http')
const {findAvailablePort}=require('./puertoLibre.js')


const desiredPort=process.env.PORT ?? 1234
const  server=http.createServer((req,res)=>{

    console.log('peticion recibida')
    res.end('wieeee martin_garrix')
  })

  



//
        port=>{

            server.listen(desiredPort,()=>{

                console.log(`esuchando en http://localhost:${desiredPort}`)
            })
        }
   //
 