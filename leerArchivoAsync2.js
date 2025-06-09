//import { console } from 'node:inspector';

const  fs=require('node:fs')

console.log("leeyendo el doc1..................");

fs.readFile('./archivo1.txt','utf-8',(err, textO)=>{

    console.log("archivo1::: ",textO);
});

console.log("leyendo el archivo2....................");


fs.readFile('./archivo2.txt','utf-8',(err, arc2)=>{
console.log("docs2: ",arc2);


});