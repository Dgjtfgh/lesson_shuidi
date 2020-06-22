// 1
// let newList = [1, 2, 3].push(4);  // newList 不是数组    push() 返回的是长度 4
// console.log(newList.push(5));

// 2
// function Car() {
//     this.make = 'Lamborghini';
//     return { make: 'Maserati'}
// }
// const myCar = new Car();
// console.log(myCar.make)

// 3
// var name = 'Jay'
// function Person(name) {
//     this.name = name
//     console.log(this.name)
// }
// var a = Person('Tom')
// console.log(name)
// console.log(a, '+++')
// var b = new Person('Michael')
// console.log(b)

// 4
// function dupicatedword(arr) {
//     let map = new Map();
//     arr.forEach(element => {
//         map.has(element)?map.set(element, true):map.set(element, false);
//     });
//     return map;
// }
// console.log(dupicatedword(['a','b','c']));
// console.log(dupicatedword(['a','b','a','b','c']));

// 5
// console.log(c);
// var c;
// function c(a) {
//     console.log(a);
//     var a = 3;
//     function a(){
//     }
// }
// c(2);

// console.log(Object instanceof Function); // true
// console.log(Function instanceof Object); // true
// console.log(Function instanceof Function);  //true

// function Person() {
//     getAge = function () {
//         console.log(10)
//     }
//     return this;
// }
// Person.getAge = function () {
//     console.log(20)
// }
// Person.prototype.getAge = function () {
//     console.log(30)
// }
// var getAge = function () {
//     console.log(40)
// }
// function getAge() {
//     console.log(50)
// }
// Person.getAge();  // 20
// getAge();         // 40
// Person().getAge();  // 10
// new Person.getAge();   //20
// getAge();              // 10
// new Person().getAge();// 30

// console.log(false.toString());  // false
// console.log([1, 2, 3].toString());  // 1,2,3
// console.log(1.toString());  // SyntaxError: Invalid or unexpected token
// console.log(5..toString());  // 5
// 当执行1.toString();时,由于1.也是有效数字,因此此时变成(1.)toString()。没有用.调用toString方法,因此抛出错误。

// console.log(1 + "2" + "2");  // '122'
// console.log(1 + +"2" + "2"); // '32'
// console.log(1 + -"1" + "2"); // '02'
// console.log(+"1" + "1" + "2");  // '112'
// console.log( "A" - "B" + "2");  // 'NaN2'
// console.log( "A" - "B" + 2);    // NaN

// console.log((0.1 + 0.2) == 0.3);  // false
// console.log(0.1 + 0.2);   // 0.30000000000000004

var a=[1, 2, 3];
console.log(a.join());  // 1,2,3