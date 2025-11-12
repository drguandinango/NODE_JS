const http=require('node:http')

const servidor=http.createServer((req,resp)=>{

    console.log('peticion recibida')
    resp.end('hola world')


})

servidor.listen(30001,()=>{


    console.log('escucahndo en: http://localhost:30001 ')
})