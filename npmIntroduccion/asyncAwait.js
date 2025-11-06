const { readFile } = require('node:fs/promises')

async function init () {
  const texto1 = await readFile('./texto_1.txt', 'utf-8')

  console.log('el archivo ONE es : ', texto1)

  console.log('cccccccccccc')

  const texto2 = await readFile('./texto_2.txt', 'utf-8')

  console.log('el archivo2 es : ', texto2)
}
init()
