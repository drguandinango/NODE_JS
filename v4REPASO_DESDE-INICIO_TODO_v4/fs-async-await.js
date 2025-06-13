//con js

//commonjJS

const {readFile}=require('node:fs/promises')

console.log("leeyendo el archivo1-------")

async function init() {

    const text1=await readFile('../archivo1.txt','utf-8')
    console.log("archivo 1 :",text1)
    console.log("hacer cosas mientras se está leeyendo el archivo1-------")

    const text2=await readFile('../archivo2.txt','utf-8')
    console.log("archivo 1 :",text2)

}

 init()