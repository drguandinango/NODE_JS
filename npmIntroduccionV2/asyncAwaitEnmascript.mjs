import {readFile}from 'node:fs/promises'

const texto1=await readFile('./READFILES_STATE/texto1.txt','utf-8');
 console.log(' archivo 1 : ',texto1)

console.log('hcer coass mietras se lee el archivo 1...');
 const texto2=await readFile('./texto2.txt','utf-8')

 console.log(' archivo 2 : ',texto2)

