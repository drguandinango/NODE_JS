const fs = require('node:fs')
fs.readFileSync(file => {
  console.log(file.type())
})
