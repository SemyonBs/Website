var http = require('http');
var nodemailer = require('nodemailer');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'index.html'});

  var fromEmail = $_GET("newform");
  var toEmail = 'sbbayramof@gmail.com';

  var transporter = nodemailer.createTransport({
    host: 'domain',
    port: 587,
    secure: true, //
    debug: true,
      auth: {
        user: 'sbbayramof@gmail.com',
        pass: 'userpassword'
      }
  });
   transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: 'Regarding forget password request',
      text: 'This is forget password response from your app',
      html: '<p>Your password is <b>sample</b></p>'
  }, function(error, response){
      if(error){
          console.log('Failed in sending mail');
          console.dir({success: false, existing: false, sendError: true});
          console.dir(error);
          res.end('Failed in sending mail');
      }else{
          console.log('Successful in sending email');
          console.dir({success: true, existing: false, sendError: false});
          console.dir(response);
          res.end('Successful in sending email');
      }
  });
}).listen(8000);
console.log('Server listening on port 8000');