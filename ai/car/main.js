const fs = require('fs');
const image = fs.readFileSync('./car.jpg').toString('base64');
const AipOcrClient = require('baidu-aip-sdk').ocr;
const client = new AipOcrClient('17712440', 'xFpR1trdIVP3ZpGlAAnFNou5', 'cSCWSkPjlzhqxjFr8auaMODDwcDpxWWG');
const options = {};
options["multi_detect"] = "true";
client.licensePlate(image, options).then(function (result) {
    console.log(result);
})