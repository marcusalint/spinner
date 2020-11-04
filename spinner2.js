

const cursorLine = ['|', '/', '-', '\\'];
let timeout = cursorLine[i] * 200

let x = setInterval (() => {
  for (i = 0; i < cursorLine.length; i++) {
    process.stdout.write(`\r ${cursorLine[i]}   `)
  
  }
},timeout)

clearInterval()

