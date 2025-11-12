const fs=require('node:fs/promises');


console.log("leyedno el archivo 1....")
fs.readFile('./READFILES_STATE/texto1.txt','utf-8')
    .then(texto1=>{

        console.log('arvhivo 1 : ',texto1)
    })

    console.log("hacer scoaasmientras se este leyedno el archivo 1....")




    fs.readFile('./texto2.txt','utf-8')
        .then(
            texto2=>{

                console.log('el achivo 2 es : ',texto2);
            }
        )