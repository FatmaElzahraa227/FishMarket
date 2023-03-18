
const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
   
   customer_name: {type:String},
   email: {type:String},
   phone_no: {type:String},
   order_body: {type:String},
   
   
   
   
   
}, {
   timestamps: true
})

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel