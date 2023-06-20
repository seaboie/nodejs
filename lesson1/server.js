// console.log("Hello World!");
// console.log(globalThis);

const os = require('os');
const path = require('path');
const {add, divide, multiply, subtract} = require('./math');

// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.version());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
// console.log();
// console.log(path.parse(__filename));

console.log(add(2, 9));
console.log(divide(4, 2));
console.log(multiply(3, 8));
console.log(subtract(8, 5));