// who like it?
// 实现一个函数，参数是一个数组（名字），
// [] "no one likes this"
// ["petter"] "Petter likes this"
// ["Jacob", "Alex"] "Jacob and Alex like this"
// ["Max", "Mark", "John"] "Max, Mark and John like this"
// ["Jacob", "Alex", "Max", "Mark"] "Jacob, Alex and two others like this"

// const likes = names => {
//     switch (names.length) {
//         case 0: return 'no one likes this'
//         case 1: return names[0] + ' likes this'
//         case 2: return names[0] + ' and ' + names[1] + ' like this'
//         case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
//         default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
//     }
//   }

const likes = names => {
    const templates = [
        'no one likes this',
        '{name} like this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name}, and {n} other like this'
    ];
    let idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{n}/g, function(val) {
        // console.log(val);
        return val === '{name}'?names.shift():names.length
    });
}

console.log(likes(["Jacob", "Alex", "Max", "Mark"]));