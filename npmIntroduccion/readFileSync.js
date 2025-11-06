const fs = require('node:fs')
const file1 = fs.readFileSync('./texto_1.txt', 'utf-8')
console.log('el archivo uno es:', file1)

console.log('haciendo algo mientras leo el archivo...')
const file2 = fs.readFileSync('texto_2.txt', 'utf-8')
console.log('el archivo two es:', file2)
