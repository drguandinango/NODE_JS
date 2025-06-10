const fs=require('node:fs');

const state=fs.statSync('../archivo2.txt');

console.log(

    state.isDirectory(),
    state.isFile(),
    state.size,
    state.isSymbolicLink()
);