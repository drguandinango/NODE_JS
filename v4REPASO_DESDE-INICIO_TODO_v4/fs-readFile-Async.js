const fs=require('node:fs')
console.log("leyendo el archivo1--------->")

fs.readFile('../archivo1.txt','utf-8',(err,text1)=>{


    console.log(" archivo uno es : ",text1)
})

console.log("hacer cosas mienstra se está leyendo el archivo1--------->")

console.log("leyendo el archivo2--------->")

fs.readFile('../archivo2.txt','utf-8',(err,text2)=>{


    console.log("archivo 2 es :",text2)
})