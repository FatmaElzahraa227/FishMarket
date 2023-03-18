const nodemailer = require("nodemailer");

async function sendEmail(dest, message,name) {
   let transporter = nodemailer.createTransport({
      service: "gmail",
      //port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.senderEmail, // generated ethereal user
        pass: process.env.senderPass, // generated ethereal password
      },
    });
   
    // send mail with defined transport object
    let info = await transporter.sendMail({
       
      from: `"Fred Foo " <${process.env.senderEmail}>`, // sender address
      to: dest, // list of receivers
      subject: "Order Details ✔", // Subject line
      text: "You've an order of: ", // plain text body
      html: message, // html body
    });

   
}


module.exports = sendEmail