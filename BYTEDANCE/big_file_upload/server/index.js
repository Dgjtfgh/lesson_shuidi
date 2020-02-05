const path = require('path');  // 路径
const fse = require('fs-extra'); // fs 拓展包
// 合并文件块
const UPLOAD_DIR = path.resolve(__dirname, ".", "target");
// console.log(UPLOAD_DIR);
const filename = 'yb';
const filePath = path.resolve(UPLOAD_DIR, "..", `${filename}.jpeg`);
// console.log(filePath);
const pipeStream = (path, writeStream) => 
    new Promise(resolve => {
        const readStream = fse.createReadStream(path);
        readStream.on("end", () => {
            fse.unlinkSync(path); // 完成后 删除文件
            resolve();
        })
        readStream.pipe(writeStream);
    })
const mergeFileChunk = async (filePath, filename, size) => {
    // console.log(filePath, filename, size);
    // 大文件上传时，设计的后端思想是 每个要上传的文件，先以文件名，
    // 为target 目录名， 把分文件 blob，放入这个目录
    // blob文件上传前要加上 index(索引)
    // node 文件合并肯定是可以的  stream
    const chunkDir = path.resolve(UPLOAD_DIR, filename);  // blob 文件路径
    // console.log(chunkDir);
    const chunkPaths = await fse.readdir(chunkDir); // readdir() 拿到目录下所有文件名
    // console.log(chunkPaths);
    chunkPaths.sort((a, b) => a.split("-")[1]-b.split("-")[1]); // 排好序

    // 每一块内容写入最后的文件， promise
    await Promise.all(
        chunkPaths.map((chunkpath, index) => 
            pipeStream(
                path.resolve(chunkDir, chunkpath),
                fse.createWriteStream(filePath, {
                    start: index * size,
                    end: (index+1) * size
                })
            )
        )
    )
    // console.log('文件合并成功');
    fse.rmdirSync(chunkDir);  // 删除目录
}

mergeFileChunk(filePath, filename, 0.5*1024*1024);