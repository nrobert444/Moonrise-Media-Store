import express from 'express'
const router = express.Router()
import nodemailer from 'nodemailer'
import { creds } from '../config/mail.js'

const transport = {
  host: 'smtp.gmail.com',
  service: 'gmail',
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
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
    to: 'moonrisestore44@gmail.com',
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
