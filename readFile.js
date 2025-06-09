const  fs=require('node:fs')

console.log("leyendo primer archivo1 :  ----")
const text1=fs.readFileSync('./archivo1.txt','utf-8')

console.log("archivo1<--------- ",text1)



console.log("--------->")



console.log("----------------------leyendo segundo archivo:---------")

const text2= fs.readFileSync('./archivo2.txt','utf-8')

console.log("archivo2: <--------- ",text2)



console.log("--------->")