const {readFile}=require('node:fs/promises')

console.log(" leyendo ARCHIVO1..........>");

async function init() {
    
    const txt1=await readFile('../archivo1.txt','utf-8')

    console.log("asrchivo1 es :  ",txt1)

    console.log(" haver cosas mientras e lee el  ARCHIVO2..........>");

    const txt2=await readFile('../archivo2.txt','utf-8')

    console.log("asrchivo2 es :  ",txt2)


}

init()