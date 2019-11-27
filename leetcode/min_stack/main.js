// 设计一个栈 Stack 
// 支持push pop top ?
// 获得栈的最小值
function MinStack() {
    this.stack = []; // 使用数组模拟栈
    this .min = Number.MAX_VALUE;

}
MinStack.prototype.push = function (x) {
    if (x<this.min) {
        this.min = x;
    }
    return this.stack.push(x);
}
MinStack.prototype.pop = function (){
    const item = this.stack.pop();
    this.min = this.stack[0];
    for(let i = 1; i < this.stack.length; i++){
        if(this.stack[i] < this.min){
            this.min = this.stack[i];
        }
    }
    return item;
}
MinStack.prototype.top = function () {
    return this.stack[this.stack.length-1];
}
MinStack.prototype.getMin = function () {
    return this.min;
}
MinStack.prototype.toString = function () {
    return this.stack.join(',');
}
var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.toString());
console.log(stack.getMin());
stack.pop();
console.log(stack.toString());
console.log(stack.getMin());