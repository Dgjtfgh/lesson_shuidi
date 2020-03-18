/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // return (((rec2[0]<rec1[0] && rec1[0]<rec2[2] &&  rec2[1]<rec1[1] && rec1[1]<rec2[3]) 
    //     || (rec2[0]<rec1[2] && rec1[2]<rec2[2] && rec2[1]<rec1[3] && rec1[3]<rec2[3]))
    //     || ((rec2[0]<rec1[0] && rec1[0]<rec2[2] && rec2[1]<rec1[3] && rec1[3]<rec2[3]) 
    //     || (rec2[0]<rec1[2] && rec1[2]<rec2[2] && rec2[1]<rec1[1] && rec1[1]<rec2[3])))                                                                                         
    return !(rec1[0] >= rec2[2] || rec1[2] <= rec2[0] || rec1[1] >= rec2[3] || rec1[3] <= rec2[1]);
    // return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]));
};

// console.log(isRectangleOverlap([0,0,1,1], [1,0,2,1]));
// console.log(isRectangleOverlap([7,8,13,15], [10,8,12,20]));
console.log(isRectangleOverlap([-4,-9,-2,3], [1,-5,9,-1]));