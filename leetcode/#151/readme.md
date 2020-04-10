# LeetCode算法之翻转字符串里的单词 #151
https://leetcode-cn.com/problems/reverse-words-in-a-string/

- 将字符串切割成数组   过滤掉空元素('')  在反转数组   转化成字符串 
    以  s = "  hello world!  "  为例
    let arr = s.split(' ').reverse();       结果为：[ '', '', 'world!', 'hello', '', '' ]
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            arr.splice(i, 1);
            i -= 1;
        }
    }                                        结果为：[ 'world!', 'hello' ]
    arr = arr.join(' ');                     结果为：world! hello

- return s.split(' ').filter(item => item).reverse().join(' ');
学习到了
filter()
    filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    注意： filter() 不会对空数组进行检测。
    注意： filter() 不会改变原始数组。
用法：
array.filter(function(currentValue,index,arr), thisValue)

    function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
        函数参数:
            参数	            描述
            currentValue	必须。当前元素的值
            index	        可选。当前元素的索引值
            arr         	可选。当前元素属于的数组对象
    thisValue	            可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
