import { readFile } from 'node:fs/promises';

console.log("leeyendo el archivo 1 con await------1");

const txt1=await readFile('../../archivo1.txt','utf-8');
console.log("CONTENT OF FIRST FILE : ",txt1);
console.log("do things while one file is reading ------");
console.log("read second file ");

const txt2=await readFile('../../archivo2.txt','utf-8');
console.log("SECOND  FILE IS READ : ",txt2);
