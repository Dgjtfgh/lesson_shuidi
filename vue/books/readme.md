
- 字符串考题
  编写一个函数  get-element-by-id 变成 getElementById
    正则  核心能力
    /-\w/g     \w 任意字符
    replace(/-\w/g,function(x) {
        return x.slice(1).toUpperCase(); // (x.charAt(1).toUpperCase(), x[1].toUpperCase()...) 
    })

- vue 语法
  - v-model   表单就用上它
  设计数据项  books: []   book: {}  一个表单，维护一个对象
  - methods: {}    addBook方法
  - 数据驱动，  {{单向}}  v-model
    数据 -> compile template -> html + methods + css -> html/css/js

    v-clock  js运行需要花时间， 在还没有准备好之前 页面设置一个loading