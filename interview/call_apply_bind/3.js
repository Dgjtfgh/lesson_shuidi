function supFather() {
    this.name = 'name';
    this.colors = ['red', 'blue', 'green'];
}
console.log(supFather.prototype.name)
supFather.prototype.sayName = function(age) {
    console.log(this.name, 'age');
}

function sub(name, age) {
    supFather.call(this, name);  // call 继承
    this.age = age;
}

// 细节
function inheritPrototype(sonFn, fatherFn) {
    // 完成子类对父类的原型的获取
    sonFn.prototype = Object.create(fatherFn.prototype);
    sonFn.prototype.constructor = sonFn;
}

inheritPrototype(sub, supFather);
// sub.prototype.sayAge = function() {

// }
