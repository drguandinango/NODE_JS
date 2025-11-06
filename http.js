const http =require('node:http')

const servidor=http.createServer((req,resp)=>{

    console.log('peticion recibida ')
    resp.end('holi mundo')

})
servidor.listen(0,()=>{

    console.log(`escuchanco el el http://localhost:${servidor.address().port}`)
})