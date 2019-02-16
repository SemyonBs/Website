const { sendContact } = require('./mailer.js')

const email = 'sbbayramof@gmail.com';

sendContact(email, 'TEST', 'TEST');