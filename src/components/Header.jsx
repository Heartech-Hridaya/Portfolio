"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Code, Briefcase, Mail, Sparkles, Award } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-lg shadow-emerald-500/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800 px-6 py-3 rounded-xl border border-emerald-500/30">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Hridaya
              </span>
              <Sparkles className="inline-block ml-2 text-emerald-400" size={18} />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative group px-5 py-3 rounded-xl transition-all duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 border border-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative flex items-center space-x-2 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">
                  <item.icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-3 rounded-xl border border-emerald-500/30 bg-slate-800/80 backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl"></div>
            <div className="relative text-emerald-400">{isOpen ? <X size={24} /> : <Menu size={24} />}</div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 p-4 rounded-2xl bg-slate-800/95 backdrop-blur-xl border border-emerald-500/20"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative group flex items-center space-x-3 p-4 rounded-xl transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute inset-0 border border-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <item.icon
                      className="text-emerald-400 group-hover:text-teal-400 transition-colors duration-300"
                      size={20}
                    />
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
