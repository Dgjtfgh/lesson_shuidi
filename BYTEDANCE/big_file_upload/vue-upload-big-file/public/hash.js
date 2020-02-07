// 通过内容计算md5值   相同内容md5值绝对一样
self.importScripts('/spark-md5.min.js');
self.onmessage = e => {// self 相当于 this   当前的线程
    //     self.postMessage({
    //         "msg": "你好"
    //     })
    const spark = new self.SparkMD5.ArrayBuffer();
    const {fileChunkList} = e.data;
    // console.log(fileChunkList);
    let percentage = 0;
    let count = 0;
    // 计算出hash
    const loadNext = (index) => {
        const reader = new FileReader();  // 文件阅读对象
        reader.readAsArrayBuffer(fileChunkList[index].file);
        reader.onload = e => {  // 事件
            count++;
            spark.append(e.target.result);
            if (count === fileChunkList.length) {
                self.postMessage({
                    percentage: 100,
                    hash: spark.end()
                });
                self.close();
            } else {
                // 还没读完
                percentage += 100 / fileChunkList.length;
                self.postMessage({
                    percentage
                })
                loadNext(count);
            }
        }
    };
    loadNext(0);
}