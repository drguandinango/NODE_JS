    
    const fs=require('node:fs')

    console.log("... Primer texto leyendo ...")

    const texto1=fs.readFileSync('./archivo1.txt','utf-8')

    console.log("... Contenido del archivo1 : ",texto1)

    console.log("... Hacer cosas mientras  el primer texto leyendo ...")



    const texto2=fs.readFileSync('./archivo2.txt','utf-8')

    console.log("contenido del archivo2: ",texto2)
