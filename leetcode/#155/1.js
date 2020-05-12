function MinStack() {
    this.stack = []; // 使用数组模拟栈
    this.min_stack = [Infinity];

}
MinStack.prototype.push = function (x) {
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length-1], x));
    return this.stack.push(x);
}
MinStack.prototype.pop = function () {
    this.min_stack.pop();
    return this.stack.pop();
}
MinStack.prototype.top = function () {
    return this.stack[this.stack.length-1];
}
MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length-1];
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