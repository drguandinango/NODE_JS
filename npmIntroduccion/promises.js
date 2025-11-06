const { readFile } = require('node:fs/promises')

readFile('./texto_1.txt', 'utf-8')
  .then(texto1 => {
    console.log('el primer archivo dadnose a conocer es : ', texto1)
  })

console.log('...estas dando a conocer archivos mediante promesas ...')

readFile('./texto_2.txt', 'utf-8')
  .then(file2 => {
    console.log('arvhivo dps es : ', file2)
  })
