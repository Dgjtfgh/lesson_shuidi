/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.max = capacity;
    this.keys = new Set();
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        this.keys.delete(key);
        this.keys.add(key);
    }
    return this.cache.get(key) || -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.cache.set(key, value);
    if (this.cache.has(key)) {
        this.keys.delete(key);
        this.keys.add(key);
    } else {
        this.keys.add(key);
    }
    if (this.keys.size > this.max) {
        const first = Array.from(this.keys)[0];
        this.keys.delete(first);
        this.cache.delete(first);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4