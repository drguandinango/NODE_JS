const {readFile}=require('node:fs/promises')

console.log("leyendo el archivo1--------->")

    readFile('../archivo1.txt','utf-8')
        .then(text=>{

            console.log("archivo 1",text)
        })

        
console.log("hacer cosas mienstra se está leyendo el archivo1--------->")

console.log("leyendo el archivo2--------->")

    readFile('../archivo2.txt','utf-8')
        .then(text=>{

            console.log("arvhuivo2 : ",text)
        })


