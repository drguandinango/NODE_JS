const fs= require('node:fs');
console.log("leyendo el archivo1........");


fs.readFile('../archivo1.txt','utf-8',(err,text1)=>{
    console.log("el archuivo 1 es : ",text1);
});

console.log("haciendo cosas miestras se leee el archivo1........");

fs.readFile('../archivo2.txt','utf-8',(error,text2)=>{

console.log("els archivo #2 es :  ",text2);

});