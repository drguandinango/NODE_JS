//leerr el aechivo de fomra síncrona

const fs=require('node:fs')

console.log("leando el archivo Uno----->")

const text1=fs.readFileSync('../archivo1.txt','utf-8')
console.log("archivo1 es:",text1)

console.log("hacer cosas meintras se está leyendo el archivo Uno----->")


const text2=fs.readFileSync('../archivo2.txt','utf-8')
console.log("archivo2 es:",text2)
