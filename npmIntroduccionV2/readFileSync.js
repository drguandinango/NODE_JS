const fs=require('node:fs')
 

const texto1=fs.readFileSync('./READFILES_STATE/texto1.txt','utf-8');

    console.log("el archivo 1 es : ",texto1);
    console.log('haciendo coasa mientras leo ek arvhivio1 ');
console.log('leyendo el archivo 2');

   const texto2=fs.readFileSync('./texto2.txt','utf-8')
   
    console.log("el archivo 2 es : ",texto2);


