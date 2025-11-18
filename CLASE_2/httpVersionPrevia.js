const http=require('node:http')

const server=http.createServer((req,res)=>{


    console.log('peticion recibida')
    res.end('hola mundo')
})

server.listen(0,()=>{

    console.log(`escichando en http://localhost:${server.address().port}`)
})