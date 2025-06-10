const fs= require('node:fs');

console.log('iniciando lectura del archivo1: --------------------------');
//ojo con el directorio no recuerdo si hayq ue ubicars en la raíz o cómo era
const txt1=fs.readFileSync('../archivo1.txt','utf-8');

console.log("el archvo leido 1 es: ",txt1);











console.log("leyendoi  el archivo dos   --------------------->")

const txt2=fs.readFileSync('../archivo2.txt','utf-8');
console.log("el archivo dos es:  ",txt2);