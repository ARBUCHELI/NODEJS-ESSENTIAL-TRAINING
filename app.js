//const myModule = require("./myModule");
const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();

//console.log(myModule.anything);
//console.log(myModule.inc());

console.log(`the count is ${getCount()}`);