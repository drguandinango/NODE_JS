const fs = require('node:fs')

const stats = fs.statSync('./archivo1.txt');

console.log(

    stats.isSymbolicLink(),
    stats.isFile(),
    stats.isDirectory(),
    stats.size
);