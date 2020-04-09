let fs = require('fs');
let join = require('path').join;

function findSync(startPath) {
    let result = [];
    function finder(path) {
        let files = fs.readdirSync(path);
        // console.log(files)
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let starts = fs.statSync(fPath);
            if(starts.isDirectory()) finder(fPath);
            if(starts.isFile()) result.push(fPath);
        })
    }
    finder(join(process.cwd(), startPath));
    return result;
}

exports.findSync = findSync