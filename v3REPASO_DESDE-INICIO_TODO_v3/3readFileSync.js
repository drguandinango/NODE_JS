//sincprona lectura del file 

const fs=require('node:fs')

console.log(" leyendo ARCHIVO1..........>");

const text1=fs.readFileSync('../archivo1.txt','utf-8')

console.log("asrchivo1 es :  ",text1)


console.log(" haver cosas mientras e lee el  ARCHIVO2..........>");

const text2=fs.readFileSync('../archivo1.txt','utf-8')

console.log("asrchivo2 es :  ",text2)