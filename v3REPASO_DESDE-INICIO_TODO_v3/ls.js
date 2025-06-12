//obtener  el directorio

const fs=require('node:fs')

fs.readdir('.',(err,files)=>{

    if(err){
        console.error("uops no  se contró")
        return;

    }

    files.forEach(file=>{

        console.log(file)

    }

    )
})