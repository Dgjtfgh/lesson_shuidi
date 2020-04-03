let myAtoi = (str)=> {
    let res = str.trim().match(/^(\-|\+)?\d+/g);
    return res ? Math.max(Math.min(Number(res), Math.pow(2, 31) - 1), Math.pow(-2, 31)) : 0;
};

console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));