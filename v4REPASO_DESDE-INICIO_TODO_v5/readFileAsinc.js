const fs=require('node:fs')

console.log("leyendo el archivo1 ...>")
   fs.readFile('./archivo1.txt','utf-8',(err,text)=>{

            console.log("archivo1 : ",text)

       })

console.log("hacer cosas meintras se lee  el archivo1 ...>")



console.log("leyendo el archivo2 ...>")
   fs.readFile('./archivo1.txt','utf-8',(err,text)=>{

            console.log("archivo2 : ",text)

       })