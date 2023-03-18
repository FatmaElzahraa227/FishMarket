require("dotenv").config();
const express = require("express");
const connect = require("./DB/connection");
const app = express();
const allRoutes = require("./modules/index.router");
app.use(express.json());
var cors = require('cors');
app.use(cors());
connect();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*" );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/v1/order", allRoutes.messageRouter);

const port = process.env.PORT;

app.listen(port, () => console.log("server is running on port " + port));
