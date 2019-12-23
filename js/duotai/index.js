function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 覆盖了Object上原有的toString方法
Person.prototype.toString = function() {
    return 'I am Person, my name is ' + this.name;
}

function Man(name, age) {
    console.log(arguments, '----');
    // Person 构造函数 把父类的构造函数执行一下
    Person.apply(this, arguments);               // 继承属性
}
Man.prototype = Object.create(Person.prototype); // 继承方法

var cxc = new Man("程鑫初", 19);
console.log(cxc + "");
// toString 覆盖
Man.prototype.toString = function() {
    return 'I am a 007, my name is ' + this.name;
}
console.log(cxc + "");

var person = new Person('云澈', 20);
console.log(person + "");  // 类型转化  加上双引号字符串化
console.log(person);
const arr = ['程鑫初', '程芳文'];
console.log(Object.prototype.toString.call(arr)); // [object Arrary]