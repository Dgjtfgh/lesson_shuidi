
// lastIndex
let reg = /[a-z]/g;
let str = 'abc';
console.log(reg.test(str), reg.lastIndex);  // true 1
console.log(reg.test(str), reg.lastIndex);  // true 2
console.log(reg.test(str), reg.lastIndex);  // true 3
console.log(reg.test(str), reg.lastIndex);  // false 0
// 修改正则匹配的位置
// reg.lastIndex = 0

// exec
console.log(reg.exec(str));  // [ 'a', index: 0, input: 'abc', groups: undefined ]
console.log(reg.exec(str));  // [ 'b', index: 1, input: 'abc', groups: undefined ]
console.log(reg.exec(str));  // [ 'c', index: 2, input: 'abc', groups: undefined ]
console.log(reg.exec(str));  // null


let keywordsReg = /function|return|class/g;
let code = `
  function foo() {
    return true;
  }
`
// 以前 得到所有 正则能够匹配到的 内容
let info = keywordsReg.exec(code);
while (info) {
    console.log(info, '+++');
    info = keywordsReg.exec(code);
}
// matchAll
// iterator: for of, Arrry.from, ...
console.log(code.matchAll(keywordsReg)); // Object [RegExp String Iterator] {}
console.log(...code.matchAll(keywordsReg));
