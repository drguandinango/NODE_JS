import{readFile}from 'node:fs/promises'
console.log(" leyendo ARCHIVO1..........>");

const text1=await readFile('../archivo1.txt','utf-8')
console.log("ARCHIVO1: ",text1);

console.log("---------Hacer cosas mienstra se lee ARCHIVO1..........>");

const text2=await readFile('../archivo2.txt','utf-8')
console.log("ARCHIVO2: ",text2);