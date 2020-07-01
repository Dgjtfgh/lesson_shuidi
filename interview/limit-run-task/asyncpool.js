const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));

(async function() {
    console.time('time');
    await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
    console.timeEnd('time');
})();

// Call iterator (i = 1000)
// Call iterator (i = 5000)
// Pool limit of 2 reached, wait for the quicker one to complete...
// 1000 finishes
// Call iterator (i = 3000)
// Pool limit of 2 reached, wait for the quicker one to complete...
// 3000 finishes
// Call iterator (i = 2000)
// Itaration is complete, wait until running ones complete...
// 5000 finishes
// 2000 finishes
// Resolves, results are passed in given array order `[1000, 5000, 3000, 2000]`.

function asyncPool(poolLimit, array, iteratorFn) {
    let i = 0;
    const ret = [];
    const executing = [];
    const enqueue = function () {
        if (i === array.length) {
            return Promise.resolve();
        }
        const item = array[i++];
        const p = iteratorFn(item, array);
        ret.push(p);
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        let r = Promise.resolve();
        if (executing.length >= poolLimit) {
            r = Promise.race(executing);
        }
        return r.then(() => enqueue());
    };
    return enqueue().then(() => Promise.all(ret));
} 