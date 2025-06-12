const fs=require('node:fs')

console.log(".......... leyendo ARCHIVO1..........>");

fs.readFile('../archivo1.txt','utf-8',(err,text1)=>{

console.log("asrchivo1 es :  ",text1)


});


console.log(" haver cosas mientras e lee el  ARCHIVO2..........>");


fs.readFile('../archivo2.txt','utf-8',(err,text2)=>{

console.log("asrchivo2 es :  ",text2)

});

