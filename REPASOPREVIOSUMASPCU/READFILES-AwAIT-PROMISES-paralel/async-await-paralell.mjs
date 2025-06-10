import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('../../archivo1.txt','utf-8'),
    readFile('../../archivo2.txt','utf-8')


]).then(([text1,tex2])=>{


    console.log('primer texto:', text1)
    console.log('segundo texto:', tex2)

})