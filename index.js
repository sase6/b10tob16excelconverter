const { writeNewFile } = require('./excel/index.js');
const path = require('path');
let url = path.join(__dirname, 'data.xlsx');

let result = [/*{
  base10: num
  base16: string   
} */];

let range = 10000;

for (let i = 1; i <= range; i++) {
  let pair = {};
  pair.base10 = i;
  pair.base16 = i.toString(16);
  result.push(pair);
}

// Write to File
writeNewFile(url, result);