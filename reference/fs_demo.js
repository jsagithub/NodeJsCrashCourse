const fs = require("fs");
const path = require("path");

// create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
//   if (err) throw err;
//   console.log("Folder Created");
// });

//Create and Write to File
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   function(err) {
//     if (err) throw err;
//     console.log("File writen to..");
//     //Add new text to file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love nodeJs",
//       function(err) {
//         if (err) throw err;
//         console.log("File writen to..");
//       }
//     );
//   }
// );

//Read File

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", function(
//   err,
//   data
// ) {
//   if (err) throw err;
//   console.log(data);
// });

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  function(err) {
    if (err) throw err;
    console.log("File renamed");
  }
);
