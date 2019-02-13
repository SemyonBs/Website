const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContact = (email, title, message) => {
  const msg = { ... }
  sgMail.send(msg)
}

module.export = { sendContact }