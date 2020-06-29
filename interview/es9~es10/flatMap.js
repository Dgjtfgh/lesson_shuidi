
let string = [
    'i am a xxxx', 'i born at 1999'
]

// ['i', 'am', 'a', 'xxxx', 'i', 'born', 'at', '1999']
console.log(string.map(x => x.split(' ')).flat(1))
console.log(string.flatMap(x => x.split(' ')))