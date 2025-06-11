const fs= require('node:fs') //ss?

console.log("leyendoi el archivo UNO------>");

fs.readFile('../archivo1.txt','utf-8',(err,text1)=>{

    console.log("ARCHIVO 1 ES : ",text1)
})

console.log(" ---------------Hacer cosas mientras se lee el archivo UNO------>");
console.log("leyendo el archivo DOS------>");

fs.readFile('../archivo2.txt','utf-8',(err,text2)=>{

 console.log("archivo  DOSes : ",text2);

});
