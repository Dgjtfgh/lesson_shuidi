虚拟DOM(VUE/REACT 提升页面性能) + 算法Tree(二叉树，二叉搜索树，平衡树，红黑树...) + 重绘 浏览器工作原理

如果下载 CSS 文件阻塞了，会阻塞 DOM 树的合成吗? 会阻塞页面的显示吗？                                                  

不会阻塞 DOM 树的合成， 会阻塞页面的显示 
不同阶段 

webpack ? 从url -> download html Document  -> 解析出来页面(看到的)  分阶段 
webpack  工作流， 不同的阶段 -> 打包输出dist.js 
网页的显示也一样 

1. DOM 树的合成 (?)
2. 页面的显示, 重绘， 重排（css处理有关）
浏览器把页面展示（绘制）出来， 工作流程
-  入口是什么？ 页面绘制的入口 index.html 网络子进程 Buffer 
  resolve: ['.html','.js','.css']
  html 超文本标记语言   <p>渲染流程</p>
  dom   标签结点(docuemnt.createElement)，  文档节点(docuemnt.createTextNode)
  css   层叠?样式表  stylesheet  p {color: red}
  js   JavaScript      p.style.color="gray"
  document 文档开始， 空白的， DOM树没形成， 渲染树更没有， 布局， 样式没有， js event loop  没有

  webpack  rules , 渲染通过最初的html文档类容， 进行分别处理
  为什么有标签就可以？  

- 不同类型的文件， 不同的loader, 
  每个阶段？ 
  类比： 
  webpack 
  - 开始每个子阶段有输入的内容   .styl  .css  .png .ts
  - 对其进行相应处理    loader 
  - 每个阶段生成输出内容   bundler.js 
上一个阶段的输出， 会成为下一个阶段的输入 bundle.js

1. 构建DOM 树， 在内存中
    浏览器没办法理解HTML格式
    编程过程    数据结构 + 算法  查找效率
    二叉搜索树
2. 样式的计算(Recalculate Style)
    样式怎么管理？  样式表
    选择器   权重   层叠
    当浏览器引擎接收到css 文本时   将文本一个个的放入 document.stylesheets 对象中
    json 组织 css 规则： 选择器就是key  属性值就是value
    - 转换样式表中的属性值，使其标准化
    - 计算每个结点的具体样式
        1. 继承
        2. 层叠
        3. 浏览器默认样式，及结点样式
3. 布局阶段
    计算出DOM树中可见元素的几何位置
    生成第二棵树(渲染树)
    1. 遍历DOM树的所有结点，并把这些节点加到布局树中
    2. 布局计算
绘制


