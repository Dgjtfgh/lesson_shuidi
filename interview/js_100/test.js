// let newList = [1, 2, 3].push(4);  // newList 不是数组    push() 返回的是长度 4
// console.log(newList.push(5));

function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati'}
}

const myCar = new Car();
console.log(myCar.make)