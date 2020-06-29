let obj1 = Object.fromEntries([
    ['a', 1],
    ['b', 2]
])
console.log(obj1)
let map = new Map([
    ['a', 1],
    ['b', 2]
])
console.log(map)
console.log(map.keys())
console.log(map.values())
console.log(Object.fromEntries(map.entries()));