import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

console.log("EMAIL_USER:", process.env.EMAIL_USER)
console.log("EMAIL_PASS:", process.env.EMAIL_PASS)

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hridayamdr2007@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div>
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
      replyTo: email,
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: "Email sent successfully!" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({ error: "Failed to send email" })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`)
})
