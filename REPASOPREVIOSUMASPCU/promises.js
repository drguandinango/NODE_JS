const fs = require('node:fs/promises')

console.log("Reading fist file commin------>")

    console.log("hacer cosas mientras se lee el achivo 1 ")

   fs=readFile('../archivo1.txt','utf-8')
    .then(text=>{

        console.log("content of first file is: ",text)
    })

    console.log("reading second file......... ")

    fs.readFile('../archivo2.txt','utf-8')
        .then(text=>{

                    console.log("content of second file is: ",text)


    })
    

    /*
const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('../archivo1.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('../archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })

  */