const express = require("express");

const app = express();

app.use((res, req, next) => {
  console.log("middleware 1");
  next();
});

app.use((res, req, next) => {
  console.log("middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
