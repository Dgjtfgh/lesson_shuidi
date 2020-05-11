# Buffer
- 结构
    1. Buffer  一个像数组的对象   主要操作字节
            一个典型的JavaScript与C++结合的模块
            分工: JavaScript核心模块    Buffer/SlowBuffer
                  C++内建模块           node_buffer
    2. Buffer对象  
        类似数组    可访问length属性得长度，也可通过下标访问元素
        元素为16进制的两位数  即0到255
        赋值后取值规则：
            给元素得赋值如果小于0，就将该值逐次加256，直到得到一个0到255之间得整数。
            如果数值大于255，就逐次减256，直到得到0到255之前得值。
            如果是小数，舍弃小数部分，只保留整数部分。
    3. 内存分配
        Buffer对象得内存分配不在V8的堆内存中，而是在Node的C++层面实现内存申请的。
        Node采用slab分配机制。slab是一种动态内存管理机制：
            就是一块申请好的固定大小的内存区域。
            三种状态：
            1. full: 完全分配状态。
            2. partial: 部分分配状态。
            3. empty: 没有被分配状态。
        分配大小方式：
          语法：
            1. new Buffer(size);
            2. Buffer.poolSize = 8 * 1024; (每个slab大小，作为单位单元进行分配)
          方式：
            1. 小Buffer对象(大小少于8KB)
                使用一个局部变量pool作为中间处理对象
                内部处理机制：
```js
                var pool; 
                function allocPool() { 
                    pool = new SlowBuffer(Buffer.poolSize); 
                    pool.used = 0; 
                }
                if (!pool || pool.length - pool.used < this.length) allocPool();
                this.parent = pool; 
                this.offset = pool.used;  // slab 开始的位置
                pool.used += this.length; // slab 接收的位置
                if (pool.used & 7) pool.used = (pool.used + 8) & ~7;
```
            2. 大Buffer对象
                直接分配一个SlowBuffer对៵作为slab单元
```js
                this.parent = new SlowBuffer(this.length); 
                this.offset = 0;
```
- Buffer 的转换
  字符串编码类型：
    - ASCII
    - UTF-8
    - UTF-16LE/UCS-2
    - Base64
    - Binary
    - Hex
  1. 字符串转Buffer
    构造函数转换   new Buffer(str, [encoding])
      encoding参数不传递时，默认按UTF-8编码进行转码和存储。
    Buffer对象可以存储不同编码类型的字符串转码的值 调用write()方法实现    
      buf.write(string, [offset], [length], [encoding]) 多次写入
      注意：不同编码所用字节长度不同，将Buffer反转回字符串需小心。
  2. Buffer转字符串
    Buffer对像的toString()可以将Buffer对像转换为字符串
      buf.toString([encoding], [start], [end])
  3. 不支持的编码类型
    判断编码是否支持转换的函数   isEncoding()
    对于不支持的编码类型，可以借助Node生态圈中的iconv和iconv-lite模块。
        iconv-lite采用纯JavaScript实现。语法：
```js
            var iconv = require('iconv-lite');
            // Buffer转字符串
            var str = iconc.decode(buf, 'win1251');
            // 字符串转Buffer
            var buf = iconv.encode("Sample input string", 'win1251');
```
        iconv通过C++调用libiconv库完成。语法：
```js
            var iconv = new Iconv('UTF-8', 'ASCII'); 
            iconv.convert('ça va'); // throws EILSEQ
```
- Buffer的拼接
    见 SpliceBuffer.js
- Buffer 性能
    读取一个相同的大文件时，highWaterMark值的大小与读取速度的关系：该值越大，读取速度越快。
