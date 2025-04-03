// node js basics.
// introduction to node js.
// installing node js aad npm.
// working with modules.
// file system Operaatio.
// understanding http Modules.
const fs = require("fs");
// console.log(fs);
fs.writeFile("hello.txt", "i love js", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file created");
});

// console.log(fs);

// reading file
fs.readFile("hello.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.appendFile("hello.txt", "I love Javascript and node js", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Undated Successfully!!");
  }
});

fs.readFile("hello.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
