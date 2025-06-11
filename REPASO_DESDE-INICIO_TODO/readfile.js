const fs=require('node:fs')

const text1=fs.readFileSync('../archivo1.txt','utf-8')
console.log("archivo UNO:  ",text1)