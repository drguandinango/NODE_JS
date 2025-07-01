import{readFile}from'node:fs/promises'

Promise.all([
        readFile('./archivo1.txt','utf-8'),
         readFile('./archivo2.txt','utf-8')
]).then(([txt1,txt2])=>{

        console.log("archivo1 es :  ",txt1),
        console.log("archivo2 es :  ",txt2)
})