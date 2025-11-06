import { readFile } from 'node:fs/promises'

const text1 = await readFile('./texto_1.txt', 'utf-8')
console.log('el archivo uno es....', text1)
console.log('bbbbbbbbbbbbbbbbbbbbb ')

const text2 = await readFile('./texto_2.txt', 'utf-8')
console.log('el archivo 2 es : ', text2)
