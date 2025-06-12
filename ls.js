    //leer el drirectorio actual
    //forma uno siin catch osea si porque ya aynca await ya lo tiene integrado pero si se desea 
    //// sin promiseas por ahora es así


    const fs= require ('node:fs')

    fs.readdir('.', (err, files) => {
        if (err) {
            console.error('Error al leer el  directory:', err);
            return;
        }
        files.forEach(file => {
            console.log(file);
        });
    })

    