var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strarry = str.split('\n');
console.log(strarry.length - 1);
