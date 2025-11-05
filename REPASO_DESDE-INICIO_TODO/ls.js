const fs=require('node:fs')

fs.readdir('.',(err,files)=>{

    if(err){

        console.log("se ha producido error errorífico",err);

        return;

    }
    files.forEach(file=>{


        console.log(file);
    })


})

