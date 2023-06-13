const path = require("path");
// console.log("Hello World");

// global.console.log("Hello World");

// let hello = "Hello World from Node.js";

// console.log(global.hello);

// console.log(hello);

console.log(__dirname);
//console.log(__filename);

console.log(`The file name is ${path.basename(__filename)}`);

for (let key in global) {
    console.log(key);
}
