const fs = require('node:fs')

 const state=fs.statSync('../archivo1.txt','uft-8')

 console.log(

    state.isDirectory(),
    state.isFile(),
    state.isSymbolicLink(),
    state.size
)
