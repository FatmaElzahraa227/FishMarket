const router = require('express').Router();
const messageValidation = require("./message.validator");
const validationFun = require('../../middleware/validation');
const {sendOrder} =require('./controller/message.controller');




router.post("/sendOrder",validationFun(messageValidation.sendOrder),sendOrder);

module.exports = router;