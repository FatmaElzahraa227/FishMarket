const router = require('express').Router();
const messageModel = require("../../../DB/model/message");
const sendEmail = require("../../../service/sendEmail");
const sendOrder = async(req,res) => {
   
     try{
        const {customer_name, email, phone_no, order_body} = req.body;
        const order = new messageModel({ customer_name, email, phone_no, order_body });
        const savedMessage = await order.save();
        msg = `<p> ${order_body} </p>`
        sendEmail('fatmaahmed2272001@gmail.com', msg,customer_name)
        res.json({message: "Order sent."})
      
     }catch(error){
        res.status(400).json({ message: error.message });
     }
 };






module.exports = {
   sendOrder
};