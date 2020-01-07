const fs = require("fs");
const path = require("path");

// create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
//   if (err) throw err;
//   console.log("Folder Created");
// });

//Create and Write to File
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World",
  function(err) {
    if (err) throw err;
    console.log("File writen to..");
  }
);
