const fs=require('node:fs');

const estado=fs.statSync('../../../../texto1.txt','utf-8');
console.log(

    estado.isFile(),
    estado.isDirectory(),
    estado.isFile(),
    estado.size
)