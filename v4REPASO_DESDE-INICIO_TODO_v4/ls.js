const fs=require('node:fs')

fs.readdir('.',(err,files)=>{


    if(err){

        console.error("no exixtse  el directorio")
        return

    }

    files.forEach(file=>{
        console.log(file)
    })
})
