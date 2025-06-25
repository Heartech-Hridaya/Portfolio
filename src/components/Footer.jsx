"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp, Brain, Code, Zap } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-t from-primary-900 to-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-8">
          <motion.button
            onClick={scrollToTop}
            className="relative group w-16 h-16 rounded-2xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-accent-bright to-accent-red hover:shadow-lg hover:shadow-accent-bright/25"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="relative z-10 text-white mx-auto mt-5" size={28} />
          </motion.button>

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Brain className="text-accent-bright" size={28} />
              <h3 className="text-3xl font-bold text-gradient-red">Hridaya Manandhar</h3>
              <Code className="text-accent-red" size={28} />
            </div>
            <p className="text-primary-200 max-w-md mx-auto leading-relaxed text-lg">
              18-year-old AI/ML Developer from Nepal, passionate about creating intelligent solutions and beautiful user
              experiences through technology and innovation.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-primary-300">
            <span className="text-lg">Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="text-accent-bright fill-current" size={20} />
            </motion.div>
            <span className="text-lg">using React, Tailwind CSS </span>
          </div>

          <div className="border-t border-white/10 pt-8 w-full text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="text-accent-bright" size={20} />
              <p className="text-primary-300 text-lg">
                © {new Date().getFullYear()} Hridaya Manandhar. All rights reserved.
              </p>
              <Zap className="text-accent-red" size={20} />
            </div>
            <p className="text-primary-400">Building the future, one line of code at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
