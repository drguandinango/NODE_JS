const {readFile}=require('node:fs/promises')
async function init(){

console.log('leyendo  el archuvo 1')
    const texto1=await readFile('./READFILES_STATE/texto1.txt','utf-8')
    console.log('archivo1: ',texto1)
    console.log('hacer scoass meintrase se lee  el archuvo 1')

     const texto2=await readFile('./texto2.txt','utf-8')
    console.log('archivo1: ',texto2)


}

init();