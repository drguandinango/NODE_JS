const fs=require('node:fs')

fs.readdir('.',(err,files)=>{
    if (err) {

        console.log('directorio no valid',err);
        return;
        
    }

    files.forEach(file=>{


        console.log(file)
    })
}
)
