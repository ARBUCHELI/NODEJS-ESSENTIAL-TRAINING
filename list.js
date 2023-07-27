const fs = require("fs");

//let files = fs.readdirSync("./");
fs.readdir("./", function (err, files) {
    if (err) {
        throw err;
    }
    console.log(files);
})

//This line is used to test the asynchronity of the callback
console.log("reading files...");

