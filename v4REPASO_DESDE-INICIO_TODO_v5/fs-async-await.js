const{readFile}=require('node:fs/promises')

    console.log("leyendo el archivo1...")

async function init(){

    const text1=await readFile('./archivo1.txt','utf-8');

    console.log("texto 1 es : ",text1)
    console.log("hacer cosas mienstras s está leyendo el archivo1...")


    const text2=await readFile('./archivo2.txt','utf-8');

    console.log("texto 2 es : ",text2)
}

init()