import {readFile} from 'node:fs/promises'

Promise.all([

    readFile('./READFILES_STATE/texto1.txt','utf-8'),
    readFile('./texto2.txt','utf-8')
]).then(([file1,file2])=>{

    console.log('arvhivo 1 es: ',file1),
    console.log('arvhivo 2 es: ',file2)

})