const fs= require('node:fs');
console.log("leyendo el primer archuivo:---- ");

fs.readFile('./archivo1.txt','utf-8',(err,text)=>{


    console.log("el archivo 1 es : ",text)
});


console.log("leyendo el segund archuive:---- ");

fs.readFile('./archivo2.txt','utf-8',(err,textD)=>{


    console.log("el archivo 2 es : ",textD)
});