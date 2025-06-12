const fs=require('node:fs')

const state=fs.statSync('../archivo1.txt','utf-8')

console.log(

    state.isDirectory(),
    state.isFile(),
    state.isSymbolicLink(),
    state.size
)