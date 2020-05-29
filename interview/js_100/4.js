const numbers = [1, 2, 3];

numbers[10] = 11;
console.log(numbers[3]); // undefined
console.log(numbers);    // [ 1, 2, 3, <7 empty items>, 11 ]
