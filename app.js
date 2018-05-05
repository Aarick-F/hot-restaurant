require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(err => {
  if(err) throw err;
  console.log("Hot-Restaurant Listening on Port " + PORT);
});