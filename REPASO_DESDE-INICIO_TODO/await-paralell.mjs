import {readFile}from 'node:fs/promises'
console.log("leyendo el archivo Uno ....");
Promise.all([
    readFile('../archivo1.txt','utf-8'),
    readFile('../archivo2.txt','utf-8')

]).then(([text1,text2])=>{

console.log("hacer cosas mieb¿ntaras se leee el uno archivo Uno ....");

    console.log("archivo uno es : ",text1)
console.log("hacer cosas mieb¿ntaras se leee el dosss archivo 2 ....");

        console.log("archivo dos es : ",text2)

})

//ña promesa unica ojito acomodar haciéndolo