# 箭头函数很简便，功能也被简化了
1. this 没有  作用域查找  父级的this

- super 关键字  举出应用场景？
    super  是继承关系里的
    class Person {
        constructor() {
            super()
        }
    }
    函数里有 super arguments(参数) this 
    super 继承父类方法
    别的可能让js函数 有super的使用？

- 对象间继承关系的新方法  Object.setPrototypeOf(childObject, fatherObject);

2. 'super' keyword unexpected here  箭头函数没有super关键字 
3. 箭头函数不适合用来做构造函数， new.target 没有这个

js 一切皆对象    对象 函数  区分一下 
对象有__proto__属性  原型对象
函数 prototype
生成对象时， 对象的__proto__属性指向函数的prototype属性
4. 箭头函数是不可以被new 的    没有this 拿不到其内的属性
