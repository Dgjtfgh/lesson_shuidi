/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let courses = new Array(numCourses).fill(0),  // 初始化上课需要先完成课程数
        res = [],
        obj = new Array(numCourses),  // 记录受该课程 影响的其他课
        temp = [];
    for (let i = 0; i < numCourses; i++) {
        obj[i] = []; 
    }
    for (let i = 0; i < prerequisites.length; i++) {
        obj[prerequisites[i][1]].push(prerequisites[i][0]);
        courses[prerequisites[i][0]] += 1;
    }
    for (let i = 0; i < numCourses; i++) {
        if (courses[i] === 0) temp.push(i);
    }
    while (temp.length > 0) {
        let top = temp.shift();
        res.push(top);
        let list = obj[top];
        if (list && list.length) {
            for (let i = 0; i < list.length; i++) {
                courses[list[i]] -= 1;
                if (courses[list[i]] === 0) temp.push(list[i]);
            }
        }
    }
    return res.length === numCourses ? res : [];
};

console.log(findOrder(2, [[1, 0]]));
console.log(findOrder(3, [[2,1],[1,0]]));
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));