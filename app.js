//Acquiring necessary modules

const express = require("express");
const app = express();

//Establishing route paths

app.get("/", function(req, res){
  res.status(200).send("Hello World");
})

module.exports = app;
