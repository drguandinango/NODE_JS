const fs=require('node:fs')
    console.log('leyendo el archivo 1 ...');



fs.readFile('./READFILES_STATE/texto1.txt','utf-8',(err,text1)=>{

    console.log('content of file first:',text1);
})


    console.log('hacer cosas mientras se está leyendo  archivo 1 ...');


fs.readFile('./texto2.txt','utf-8',(err,texto2)=>{

    console.log('content of file second:',texto2);

})