"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Send, Github, CheckCircle, AlertCircle, Instagram, Zap,Linkedin } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".contact-title",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Form animation
      gsap.fromTo(
        ".contact-form",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Contact info animation
      gsap.fromTo(
        ".contact-info",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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
      const response = await fetch("/api/contact", {
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
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 974-9704504",
      href: "tel:+9779749704504",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Maitidevi, Kathmandu, Nepal",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/Heartech-Hridaya", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hridaya-manandhar/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/heart_mdr/", label: "Instagram" },
    { icon: Mail, href: "mailto:hridayamdr2007@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-primary-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="contact-title text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">GET IN</span> <span className="text-gradient-red">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-bright to-accent-red mx-auto mb-8"></div>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, AI/ML projects, or just having a chat about technology and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="contact-info space-y-8">
            <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <div className="flex items-center mb-6">
                <Zap className="text-accent-bright mr-3" size={32} />
                <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
              </div>
              <p className="text-primary-200 mb-8 leading-relaxed text-lg">
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
                  <div className="relative flex items-center space-x-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent-bright/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-bright to-accent-red rounded-2xl flex items-center justify-center">
                      <info.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-accent-bright transition-colors duration-300 text-lg">
                        {info.title}
                      </h4>
                      <p className="text-primary-200 text-lg">{info.value}</p>
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
                    className="group w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 hover:border-accent-bright/50 hover:bg-accent-bright/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-white group-hover:text-accent-bright transition-colors" size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-bright focus:border-transparent text-white placeholder-primary-300 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-bright focus:border-transparent text-white placeholder-primary-300 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-bright focus:border-transparent text-white placeholder-primary-300 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-bright focus:border-transparent text-white placeholder-primary-300 resize-none transition-all duration-300"
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
                  className="relative group w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-accent-bright to-accent-red text-white hover:shadow-lg hover:shadow-accent-bright/25"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <div className="relative flex items-center justify-center space-x-3">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
