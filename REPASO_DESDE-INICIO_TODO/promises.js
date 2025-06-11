const fs =require('node:fs/promises')

console.log("leyendo el acechivoUNO---->")


fs.readFile('../archivo1.txt','utf-8')
    .then(text1=>{

        console.log("archiuvoUno es : ",text1)
    })

    console.log("hacer cosas mientras se   lee el numerUNo----");

    fs.readFile('../archivo2.txt','utf-8')
        .then(text1=>{

            console.log("el archivoDos es:",text1)
        })
