// // forma 1 suamndo la parte del process.argv

// // const fs = require('node:fs')
// const fs = require('node:fs')
// // files
// const folder = process.argv[2] ?? '.'
// fs.readdir(folder, (err, files) => {
//   if (err) {
//     console.log('no se enceuntra el directorio', err)
//     return
//   }
//   files.forEach(file => {
//     console.log(file)
//   })
// })
//   })
// })//   })
// })//   })
// })//   })
// })//   })
// })
// forma 2 agregando el argv
const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'
fs.readdir(folder)
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    if (err) {
      console.log('no vale el directorio', err)
    }
  })
