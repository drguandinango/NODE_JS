const http=require('node:http')

const servidor=http.createServer((req,resp)=>{

    console.log('peticion recibida'),
    resp.end('entrega de cursos')
})

servidor.listen(4000,()=>{

    console.log('escuchando en el puerto http://localhost:4000')
})