import{readFile} from 'node:fs/promises'
console.log(" leyendo ARCHIVO1..........>");

    readFile('../archivo1.txt','utf-8')
    .then(text1=>{
            console.log("ARCHIVO1: ",text1);
    })

console.log("---------Hacer cosas mienstra se lee ARCHIVO1..........>");

readFile('../archivo2.txt','utf-8')
    .then(text2=>{
            console.log("ARCHIVO2: ",text2);
    })
