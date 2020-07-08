let a= 123;
let b = {
    age: 18
}

module.exports = {
    a, 
    b
}

setTimeout(() => {
    a = 456;
    b.age = 28;
}, 10)