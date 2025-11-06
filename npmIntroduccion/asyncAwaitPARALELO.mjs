import { readFile } from 'node:fs/promises'
Promise.all([
  readFile('./texto_1.txt', 'utf-8'),
  readFile('./texto_2.txt', 'utf-8')
]).then(([text1, text2]) => {
  console.log('archivo uno es ::.', text1)
  console.log('archivo uno es ::.', text2)
})
