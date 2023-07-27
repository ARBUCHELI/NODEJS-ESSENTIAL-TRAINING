const fs = require("fs");

//let ipsum = fs.readFileSync("./1. What is Nodejs.txt", "UTF-8");
fs.readFile("./1. What is Nodejs.txt", "UTF-8", (err, ipsum) => {
    console.log(ipsum);
})

console.log("reading the file...");