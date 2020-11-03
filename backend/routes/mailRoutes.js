import express from 'express'
const router = express.Router()
import nodemailer from 'nodemailer'

const transport = {
  host: 'smtp.gmail.com',
  service: 'gmail',
  port: 587,
  auth: {
    user: 'njr444@gmail.com',
    pass: '7SamuraIFINora'
  },
  tls: {
    rejectUnauthorized: false
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})
router.post('/', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: 'njrna444@yahoo.com',
    subject: 'New Message from Contact Form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
      smtpTransport.close()
    }
  })
})

export default router
