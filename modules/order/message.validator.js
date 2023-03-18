const Joi = require("joi");


const sendOrder = {
   body: Joi.object().required()
   .keys({

     customer_name: Joi.string().required(),
     email: Joi.string().email().required(),
     phone_no: Joi.string().required().min(11).max(11),
     order_body: Joi.string().required().min(10)
   
   }),
  };


module.exports = {sendOrder};