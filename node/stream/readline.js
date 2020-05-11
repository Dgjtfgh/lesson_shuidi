const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    // input: process.stdin,
    // out: process.stdout
    input: fs.createReadStream('./readme.md')
})

rl.on('line', function(lineData) {
    console.log(lineData);
})