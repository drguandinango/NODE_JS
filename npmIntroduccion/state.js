const fs = require('node:fs')

const stado = fs.statSync('./texto_1.txt', 'utf-8')
console.log(stado.isDirectory(),
  stado.isFile(),
  stado.isSymbolicLink(),
  stado.size

)

// console.log(stado.isFile()),
// console.log(stado.isSymbolicLink())
