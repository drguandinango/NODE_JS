const fs=require('node:fs')

const stado=fs.statSync('./archivo1.txt','utf-8')
console.log(

    stado.isDirectory(),
        stado.isFile(),
    stado.isSymbolicLink(),
    stado.size

    
)