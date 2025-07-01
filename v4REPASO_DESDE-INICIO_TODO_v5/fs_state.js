const fs=require('node:fs')

const stado=fs.statSync('./archivo1.txt','utf-8')
console.log(

    stado.isDirectory(),
        stado.isFile(),
    stado.isSymbolicLink(),
    stado.size

    
)

////
/*
1.os-info
1.os-info
10.free-port
2.fs-stat
3.fs-readFile-sync
3.fs-readFile
4.fs-async-await-parallel
4.fs-async-await
4.fs-async-await
4.fs-promises
5.path
6.ls
7.process
8.ls-advanced
9.http
archivo.txt
archivo2.txt
packageon

*/