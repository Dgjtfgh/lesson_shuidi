// backend  :3000/api/products
// 假数据
const _products = [
    {"id": 1, "title": "iPad4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Sgirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX -Suker CD", "price": 19.99, "inventory": 5}
];

export default {
    // backend   callback
    getProducts(cb) {
        // 模拟ajax过程
        // setTimeout(() => {
        //     cb(_products)
        // }, 1000)
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(_products), 1000);
        })
    }
}