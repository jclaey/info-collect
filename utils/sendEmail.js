const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async options => {
  const msg = {
    to: 'jdclaeys@outlook.com',
    from: 'jason@claeysdev.com',
    subject: 'New Client Added',
    html: `<strong>${options.firstName} ${options.lastName}</strong> is interested in dent and hail repair and has submitted their information. Go to <a href="">admin login</a>`
  }

  try {
    await sgMail.send(msg)
  } catch (err) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
  }
}

module.exports = sendEmail