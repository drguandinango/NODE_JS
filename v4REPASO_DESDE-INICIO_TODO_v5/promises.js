const fs=require('node:fs/promises')

//readFile

console.log("leyendo el archivo1 ...>")

  fs.readFile('./archivo1.txt','utf-8')
    .then(text=>{

        console.log("archivo 1: ",text)
    })
    console.log("hacer cosas meintras se lee  el archivo1 ...>")








    console.log("leyendo el archivo2 ...>")

    fs.readFile('./archivo2.txt','utf-8')
        .then(text=>{

            console.log("archivo 2 : ",text)
        })