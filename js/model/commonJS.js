const { a, b } = require('./bb.js');
console.log(a, b);
setTimeout(() => {
    console.log(a, b);
}, 2000)