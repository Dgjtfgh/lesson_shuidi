var _class;

let MyClass = annotation(_class = class MyClass {}) || _class;

function annotation(target) {
  target.annotated = true; // 装饰MyClass类 拥有annotation属性
}

console.log(MyClass.annotated);
