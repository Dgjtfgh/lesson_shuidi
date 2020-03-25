@annotation
class MyClass {

}

function annotation(target) {
    target.annotated = true // 装饰MyClass类 拥有annotation属性
}

console.log(MyClass.annotated);