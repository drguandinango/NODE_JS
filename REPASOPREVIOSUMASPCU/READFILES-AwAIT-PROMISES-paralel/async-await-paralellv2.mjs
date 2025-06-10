import {readFile} from 'node:fs/promises'

Promise.all([
    readFile('../../archivo1.txt','utf-8'),
     readFile('../../archivo2.txt','utf-8'),
   
]).then(([t1,t2])=>{

        console.log("text1: ",t1),

        console.log("text2: ",t2)
        //componentre algo que se jecuta e mi porgrama y seaccede y utilizado -->afuera->es un microservicio


    });