const Joi = require("joi");


const sendOrder = {
   body: Joi.object().required()
   .keys({

     customer_name: Joi.string(),
     email: Joi.string().email(),
     phone_no: Joi.number(),
     order_body: Joi.string().required()
   
   }),
  };


module.exports = sendOrder;