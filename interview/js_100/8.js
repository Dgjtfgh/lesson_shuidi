var a = {k1: 1}
var b = a
a.k3 = a = {k2: 2}

console.log(a); // {k2: 2}
console.log(b);
// {
//     k1: 1
//     k3: {k2: 2}
// }