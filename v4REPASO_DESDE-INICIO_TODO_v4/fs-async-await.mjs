import { readFile } from "node:fs/promises";

console.log("leyebdno el archivo Uno 1-------")
const txt1=await readFile('../archivo1.txt','utf-8')


console.log("archivo 1 es : ",txt1)

console.log("haciendo cosas mienstras se elee  el archivo Uno 1-------")
console.log("leeyndo el archivo2 ------")

const txt2=await readFile('../archivo2.txt','utf-8')


console.log("archivo 2 es : ",txt2)

