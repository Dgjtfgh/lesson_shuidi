let a = Number.MAX_SAFE_INTEGER;
console.log(a);      // 9007199254740991
console.log(a + 1);  // 9007199254740992
console.log(a + 2);  // 9007199254740992
console.log(a + 3);  // 9007199254740994
console.log(a + 4);  // 9007199254740996
// 存在精度问题

// bigint 类型
let a1 = 9007199254740991n; 
let b1 = 123n; 

// console.log(a1 + 1); // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(a1 + 1n);   // 9007199254740992n
console.log(a1 + 10n);  // 9007199254741001n
console.log(typeof a1); // bigint
