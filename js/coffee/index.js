// 1. 构建一个coffee 类
// js 的面向对象比较特别
var Coffee = function() {  //匿名 值是函数
  console.log('开始给您泡制咖啡，请等等');  
};
Coffee.prototype.bailWater = function() {
    console.log('把水煮沸');
};
Coffee.prototype.brewCoffeeGriends = function() {
    console.log('用沸水冲泡咖啡');
};
Coffee.prototype.pourInCup = function() {
    console.log('把咖啡到进杯子');
};
// 在类的原型上添加一个方法
Coffee.prototype.addSugarAndMilk = function() {
    console.log('加糖和牛奶');
};
// 抽象 隐去一下细节
Coffee.prototype.makeCoffee = function() {
    this.bailWater();
    this.brewCoffeeGriends();
    this.pourInCup();
    this.addSugarAndMilk();
    console.log('咖啡做好了，请喝吧');
}
var coffee = new Coffee();
coffee.makeCoffee();
function Tea(type) {
    // 茶类
    this.type = type;
    console.log('开始给您泡茶，请稍等'); 
}
Tea.prototype.boilWater = function () {
    console.log('把水煮沸');
}
Tea.prototype.seepTeaBag = function () {
    console.log('用沸水浸泡茶叶');
}
Tea.prototype.pourInCup = function () {
    console.log('把茶水倒进杯子');
}
Tea.prototype.addLemon = function () {
    console.log('加柠檬');
}
Tea.prototype.makeTea = function () {
    // this指向实例后的对象
    this.boilWater();
    this.seepTeaBag();
    this.pourInCup();
    this.addLemon();
    console.log('茶做好了，请喝吧');
}
const tea = new Tea('乌龙茶');
tea.makeTea();
console.log(tea.type);

