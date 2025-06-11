import{readFile} from 'node:fs/promises'

console.log("leyendo el archivo UNo ------>")

const textO=await readFile('../archivo1.txt','utf-8')

console.log("contenido es: del UNo--:::",textO)

console.log(".....haced cosas minetras se hacen las del Uno......")
const txt2=await readFile('../archivo2.txt','utf-8')

console.log("second text: ",txt2)