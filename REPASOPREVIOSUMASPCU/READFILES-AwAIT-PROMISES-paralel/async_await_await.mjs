import { readFile } from 'node:fs/promises'

console.log(".....leyendo arhivo1.....");

async function init() {



    const txt1 = await readFile('../../archivo1.txt', 'utf-8');
     console.log("arc1: ",txt1)
     console.log(".....hacer cosas mientras se está leyendo el  arhivo1.....");
     console.log(".....leyendo el segundo.....");

    const txt2 = await readFile('../../archivo2.txt', 'utf-8');
     console.log("arc2: ",txt2)


}

init()