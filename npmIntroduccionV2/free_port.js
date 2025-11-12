// const http=require('node:http')

//   const server =http.createServer((req,resp)=>{

//     console.log('peticion recibida')
//     resp.end('jola junkjal');
//   })

//   server.listen(0,()=>{
//     console.log(`eschucancho en el puerto http://localhost:${server.address().port}`)
//   })
// // //   })
// // //   })

// // v

/*
  server.on('error',(err)=>{


            if (err.code==='EADDRINUSE') {
                 findAvaliablePort(0)
                 .then(port=>{
                    resolve(port)
                 })
            }
            else{
                
                reject(err)
            }
        })
*/
// // v
// // v

// // v

// const net=require('node:net')

// function findAvaliablePort(desiredPort){

//     new Promise((resolve,reject)=>{


//         const servidor=net.createServer()

//         servidor.listen(desiredPort,()=>{

//             const{port}=servidor.address()
//             servidor.close(()=>{

//                 resolve(port)
//             })
//         })


//         servidor.on('error',(err)=>{

//             if (err.code==='') {
//                     findAvaliablePort(0)
//                         then(
//                             port=>{
//                                 resolve(port)
//                             }
//                         )
                

//             } else {
                
//                 reject(err)
//             }
//         })
    
//     })
// }

// // v
// // v

// // v

// // v
// // v

// // v
// // v
// // v

// // v
//autolevantar un puerto de por si para que no se caiga o  controlar el error de esa caida 
const  net=require('node:net')

function findAvailablePort(desiredPort){

    new Promise((resolve,reject)=>{

        const server=net.createServer()
        
        server.listen(desiredPort,()=>{

            const{port}=server.address();
            server.close(()=>{

                resolve(port)
            })
        })

        server.on('error',(err)=>{

            if (err.code==='EADDRINUSE') {
                
                findAvailablePort(0)
                    .then(
                        port=>

                            resolve(port)
                        
                    )
            } else {
                
                reject(err)
            }
        })
    })
}