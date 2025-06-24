"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, CheckCircle, AlertCircle, Instagram, Sparkles } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("http://localhost:5000/api/contact", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hridayamdr2007@gmail.com",
      href: "mailto:hridayamdr2007@gmail.com",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 974-9704504",
      href: "tel:+9779749704504",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Maitidevi, Kathmandu, Nepal",
      href: "#",
      color: "from-emerald-400 to-teal-500",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/Heartech-Hridaya", label: "GitHub", color: "hover:text-emerald-400" },
    { icon: Instagram, href: "https://www.instagram.com/heart_mdr/", label: "Instagram", color: "hover:text-teal-400" },
    { icon: Mail, href: "mailto:hridayamdr2007@gmail.com", label: "Email", color: "hover:text-emerald-400" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-emerald-400 mr-3" size={32} />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <Sparkles className="text-teal-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, AI/ML projects, or just having a chat about technology and
            innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-emerald-500/20">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Whether you have an AI/ML project in mind, want to collaborate on web development, or just want to
                discuss the latest in technology, I'd love to hear from you. Feel free to reach out through any of the
                channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="group relative block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                  <div className="relative flex items-center space-x-6 p-6 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center`}
                    >
                      <info.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300 text-lg">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 text-lg">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-2xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative group w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border border-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <social.icon className="relative text-gray-400 transition-colors duration-300" size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur opacity-50"></div>

            <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-xl ${
                      submitStatus === "success"
                        ? "bg-green-500/20 border border-green-500/30 text-green-400"
                        : "bg-red-500/20 border border-red-500/30 text-red-400"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} />
                        <span>Failed to send message. Please try again or contact me directly.</span>
                      </>
                    )}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group w-full py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-3 text-white text-lg">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
