
const mongoose = require('mongoose');
const  Joi  = require('joi');



const messageSchema = new mongoose.Schema({
   
   customer_name: {type:String},
   email: {type:String},
   phone_no: {type:Number},
   order_body: {type:String, required:true},
   
   
   
   
   
}, {
   timestamps: true
})

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel