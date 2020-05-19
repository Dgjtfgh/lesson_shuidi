# babel

parse -> trabsform -> generate

- 解析： code -> AST(抽象语法树)
    1. 词法分析： 状态机   源码解析为一个个 token: start-div  start-p  end-p end-div
    2. 语法分析： 父子关系构造出来
    3. AST

我今天很高兴：
词法分析：分词： '我'   '今天'   '很'  '高兴'
语法分析：分析，强调的是 整个语境 上下文

```js
while(true) {
    try {
        var a = 1;
    } catch(err) {

    }
}
```
```js
body: [
    while: {
        condition: true,
        statement: null
    }
    try: {
        var: {
            variable: 'a',
            value: 1
        }
        catch: {
            argument: err
        }
    }
]
```
