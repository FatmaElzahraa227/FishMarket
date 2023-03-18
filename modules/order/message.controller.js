const router = require('express').Router();
const messageModel = require("../../DB/model/message");
const sendEmail = require("../../service/sendEmail");
const messageValidation = require("./message.validator");
const validationFun = require('../../middleware/validation');


const sendOrder = async(req,res) => {
   
     const {customer_name, email, phone_no, order_body} = req.body;
     const order = new messageModel({ customer_name, email, phone_no, order_body });
     const savedMessage = await order.save();
     msg = `<p> ${order_body} </p>`
     
     sendEmail('kikohi18@gmail.com', msg)
     res.json({message: "Order sent."})
   
 };




router.post("/sendOrder",/*validationFun(messageValidation.sendOrder),*/sendOrder);

module.exports = router;