const fs=require('node:fs')
const est=fs.statSync('../archivo1.txt','utf-8')

console.log(

    est.isDirectory(),
    est.isFile(),
    est.isSymbolicLink(),
    est.size
)