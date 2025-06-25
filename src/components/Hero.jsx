"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Mail, Download, Brain, Code, Palette, Instagram, MapPin, Calendar } from "lucide-react"
import {  Eye } from 'lucide-react'; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <motion.div className="mb-1" variants={itemVariants}>
          <div className="relative inline-block">
            <motion.div
              className="w-32 h-32 mx-auto mb-5 mt-20 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 py-2 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <Brain className="text-white" size={32} />
                  </div>
                </div>
              </motion.div>

              {/* Status Indicator */}
              <motion.div
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Personal Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Calendar size={16} className="text-emerald-400" />
                <span className="text-sm text-gray-300">18 years old</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <MapPin size={16} className="text-teal-400" />
                <span className="text-sm text-gray-300">Kathmandu, Nepal</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div className="mb-4" variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hridaya Manandhar
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
              AI/ML Developer & Full Stack Engineer
            </span>
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div className="flex flex-wrap justify-center items-center gap-6 mb-10" variants={itemVariants}>
          <div className="flex items-center space-x-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
            <Brain size={24} className="text-emerald-400" />
            <span className="text-lg font-medium text-gray-300">Machine Learning</span>
          </div>
          <div className="flex items-center space-x-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-teal-500/20">
            <Code size={24} className="text-teal-400" />
            <span className="text-lg font-medium text-gray-300">Full Stack Development</span>
          </div>
          <div className="flex items-center space-x-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
            <Palette size={24} className="text-emerald-400" />
            <span className="text-lg font-medium text-gray-300">UI/UX Design</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p className="text-xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed" variants={itemVariants}>
          Passionate 18-year-old developer from Nepal, creating intelligent solutions through AI/ML and building
          impactful web applications that solve real-world problems. I specialize in turning complex data into
          actionable insights and crafting beautiful, functional user experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          variants={itemVariants}
        >
         

          <div class="flex space-x-4">
            <a href="/Hridaya_CV.pdf" download="Hridaya_CV.pdf">
              <motion.button
                className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div className="relative flex items-center space-x-3 text-white">
                  <Download size={20} />
                  <span className="text-lg">Download Resume</span>
                </div>
              </motion.button>
            </a>

            <a href="/Hridaya_CV.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl"
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div className="relative flex items-center space-x-3 text-white">
                  <Eye size={20} />
                  <span className="text-lg">View CV</span>
                </div>
              </motion.button>
            </a>
          </div>


          <motion.a
            href="#contact"
            className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 border-2 border-emerald-500 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-lg text-emerald-400 group-hover:text-white transition-colors duration-300">
              Let's Connect
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex items-center justify-center space-x-6 mb-16" variants={itemVariants}>
          {[
            {
              icon: Github,
              href: "https://github.com/Heartech-Hridaya",
              label: "GitHub",
              color: "hover:text-emerald-400",
            },
            {
              icon: Instagram,
              href: "https://www.instagram.com/heart_mdr/",
              label: "Instagram",
              color: "hover:text-teal-400",
            },
            { icon: Mail, href: "mailto:hridayamdr2007@gmail.com", label: "Email", color: "hover:text-emerald-400" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className={`group relative p-4 rounded-2xl transition-all duration-300 ${social.color}`}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <social.icon className="relative text-gray-400 transition-colors duration-300" size={28} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div className="animate-bounce" variants={itemVariants}>
          <a
            href="#about"
            className="inline-block p-3 text-emerald-400 hover:text-teal-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
