// 设计一个栈 Stack 
// 支持push pop top ?
// 获得栈的最小值
function MinStack() {
    this.stack = []; // 使用数组模拟栈
    this .min = Number.MAX_VALUE;

}
MinStack.prototype.push = function (x) {
    if (this.min === null || x < this.min) {
        this.min = x;
    }
    return this.stack.push(x);
}
MinStack.prototype.pop = function () {
    let item = this.stack.pop();
    this.min = this.stack[0];
    // console.log(this.stack, '1111')
    if (this.stack.length < 1) {
        this.min = null
    }
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
console.log(stack.push(2147483646));
console.log(stack.push(2147483646));
console.log(stack.push(2147483646));
console.log(stack.top(), '1');
stack.pop();
// console.log(stack.toString());
console.log(stack.getMin(), '2');
stack.pop();
console.log(stack.getMin(), '2');
stack.pop();
console.log(stack.push(2147483646));
console.log(stack.top(), '1');
// console.log(stack.toString());
console.log(stack.getMin(), '2');
stack.push(-2147483646);
console.log(stack.top(), '1');
console.log(stack.getMin(), '2');
stack.pop();
console.log(stack.getMin(), '2');