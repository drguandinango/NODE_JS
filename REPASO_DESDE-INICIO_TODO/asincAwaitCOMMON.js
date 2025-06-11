const {readFile}=require('node:fs/promises')

async function init() {
    
    console.log("leyendo el uno-.---->");

     const txt1=await readFile('../archivo1.txt','utf-8')
     console.log("archivo UNo contenido:::",txt1);
     console.log("{{{{{{----->hacer coisas mimstras se lee el archivouno-----") 
        const txt2= await readFile('../archivo2.txt','utf-8');

        console.log("contenido del archivo dos:",txt2)
    }

init()