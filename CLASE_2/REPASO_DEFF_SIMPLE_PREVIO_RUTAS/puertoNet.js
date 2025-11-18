const net=require('node:net')

function findAvailablePort(desiredPort){

    return new Promise((resolve,reject)=>{
        const servidor=net.createServer()

        servidor.listen(desiredPort,()=>{

            const{port}=servidor.address()

            servidor.close(()=>{

                resolve(port)
            })
        })

        servidor.on('error',(err)=>{

                   if(err.code=='EDARRINUSE'){

                        findAvailablePort(0)
                            .then(
                                port=>{

                                    resolve(port)
                                }
                            )
                   }else{

                    reject(err)
                   } 

         
        })

    })
}

module.exports={
    findAvailablePort
}