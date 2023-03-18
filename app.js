require("dotenv").config();
const express=require('express');
const connect = require('./DB/connection');
const app = express();
const port=process.env.PORT;
const singleRoute=require('./modules/order/message.controller')
app.use(express.json());

connect()
app.get('/',(req,res)=>res.send("Hello World!"));
const MessageRouter = require('./modules/order/message.controller');
app.use("/api/v1/order", singleRoute);



app.listen(port,()=>console.log("server is running on port " + port));