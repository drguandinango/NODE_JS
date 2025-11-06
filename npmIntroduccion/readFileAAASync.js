const fs = require('node:fs')
console.log('eleyendo archivo1....')

fs.readFile('./texto_1.txt', 'utf-8', (err, file1) => {
  if (err) {
    console.error('Error al leer el archivo 1:', err)
    return
  }
  console.log('el archivo uno es : ', file1)
})
fs.readFile('./texto_2.txt', 'utf-8', (err, file2) => {
  if (err) {
    console.error('Error al leer el archivo 2:', err)
    return
  }
  console.log('el archivo 2 es :', file2)
})
