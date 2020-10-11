const express = require("express");
const bodyParser = require("body-parser");
const app2 = express();

const funcionarios = require("./routes/funcionariosRoute")

app2.use(bodyParser.json());

app2.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app2.use("/funcionarios", funcionarios);

module.exports = app2;