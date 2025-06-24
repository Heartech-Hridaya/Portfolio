"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp, Brain, Code, Sparkles } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-black text-white py-16 border-t border-emerald-500/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-8">
          <motion.button
            onClick={scrollToTop}
            className="relative group w-16 h-16 rounded-2xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowUp className="relative z-10 text-white mx-auto mt-5" size={28} />
          </motion.button>

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Brain className="text-emerald-400" size={28} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Hridaya Manandhar
              </h3>
              <Code className="text-teal-400" size={28} />
            </div>
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed text-lg">
              18-year-old AI/ML Developer from Nepal, passionate about creating intelligent solutions and beautiful user
              experiences through technology and innovation.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-gray-400">
            <span className="text-lg">Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="text-red-500 fill-current" size={20} />
            </motion.div>
            <span className="text-lg">using React, Tailwind CSS & AI</span>
          </div>

          <div className="border-t border-emerald-500/20 pt-8 w-full text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="text-emerald-400" size={20} />
              <p className="text-gray-400 text-lg">
                © {new Date().getFullYear()} Hridaya Manandhar. All rights reserved.
              </p>
              <Sparkles className="text-teal-400" size={20} />
            </div>
            <p className="text-gray-500">Building the future, one line of code at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
