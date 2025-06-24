import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hridayamdr2007@gmail.com", // Your actual email
      subject: `Portfolio Contact: ${subject}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
        New Contact Form Submission - Hridaya's Portfolio
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      </div>
      
      <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #06b6d4; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Message:</h3>
        <p style="line-height: 1.6; color: #4b5563;">${message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
        <p>This email was sent from Hridaya's portfolio contact form.</p>
        <p>Reply directly to this email to respond to ${name}.</p>
      </div>
    </div>
  `,
      replyTo: email,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
