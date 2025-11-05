//leer el drirectorio actual
//forma uno siin catch osea si porque ya aynca await ya lo tiene integrado pero si se desea 
//// sin promiseas por ahora es así

/*
    const fs= require ('node:fs')
//------>
    fs.readdir('.', (err, files) => {
        if (err) {
            console.error('Error al leer el  directory:', err);
            return;
        }
        files.forEach(file => {
            console.log(file);
        });
    })

    

    */

//probando defincion de process.arvg

// console.log(process.argv);

// if(process.argv[2]){


//     console.log("argumento budacod es : ",process.argv[2]);

// }
//console.log("arguntenfo solicitado es",process.argv[3] ??)

//const folder=process.argv[2] ?? '.'


//const fs = require('node:fs/promises')

// fs.readdir('.')

//     .then(files => {


//         files.forEach(file => {


//             console.log(file);

//         })


//     })
//     .catch(

//         err => {
//             if (err) {

//                 console.log("erronea  la lectura..", err);
//                 return;

//             }

//         }

//     )


//forma uno 

// // const fs=require('node:fs')

// // fs.readdir('.',(files,err)=>{

// //             if(err){

// //                 console.log("pero de mis desiertos",err)
// //                 return;
// //             }

// //             files.foreach(file=>{
// //                 console.log(file);
// //             })

// // })

//forms dos 


// const fs=require('node:fs/promises')

// fs.readdir('.')
//     .then(files=>{

//        files.forEach(file=>{
//             console.log(file);
//         }) 
//     }

//     )
//     .catch(
//         err=>{

//             if(err){

//                 console.log("entiendemiJIN dayan te convieneeee :c ",err);
//                 return;
//             }
//         }      
//     )



// const fs =require('node:fs');

// fs.readdir('.',(err,files)=>{


//     if (err) {
//        console.log("ene l jucuicui ente el trono celestial",err);
//        return; 
//     }

//     files.forEach(
//         file=>{

//             console.log(file)
//         }        

//     )
// })


/*

const fs = require('node:fs/promises')

fs.readdir('.')
    .then(files => {

        files.forEach(file => {

            console.log(file);


        }
        )

    })

    .catch(

        err => {

            if (err) {

                console.log("no hay la ruta requerida e..", err);
                return;
            }
        }
    )


*/

 //console.log(process.argv[3]);



//  const fs = require('node:fs/promises')


//  const folder=process.argv[2] ?? '.';
// fs.readdir(folder)
//     .then(files => {

//         files.forEach(file => {

//             console.log(file);


//         }
//         )

//     })

//     .catch(

//         err => {

//             if (err) {

//                 console.log("no hay la ruta requerida e..", err);
//                 return;
//             }
//         }
//     )






























//forma 2




















// const fs=require('node:fs/promises');

// const folder=process.argv[2] ?? '.';
// fs.readdir(folder)
//     .then(files=>{



//         files.forEach(
//             file=>{

//             console.log(file)

//             }
//         )
        

//     })
//     .catch(
//         err=>{
//             if (err) {
//                 console.log("directorio desconocido");
//                 return;
//             }
//         }


//     )





















const fs=require('node:fs')


fs.readdir('.',(err, files)=>{

        if (err) {
            
            console.log('nos se encuentra nada : ',err);
            return;
        }

        files.forEach(file=>{

            console.log(file);
        })

})