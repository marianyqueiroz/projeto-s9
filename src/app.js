const express = require("express");
const app = express();

const livros = require("./routes/livrosRoute.js");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use("/livros", livros);

module.exports = app;