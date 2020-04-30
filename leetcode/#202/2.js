var isHappy = function (n) {
    let slow = getNext(n),
        fast = getNext(slow);
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(fast);
        fast = getNext(fast);
    }
    return fast === 1;
};
function getNext(n) {
    let sum = 0;
    while (n > 0) {
        let temp = n % 10;
        n = parseInt(n / 10);
        sum += temp * temp;
    }
    return sum;
}
console.log(isHappy(19));
console.log(isHappy(2));