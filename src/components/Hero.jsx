"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowDown,
  Github,
  Mail,
  Download,
  Brain,
  Code,
  Palette,
  Instagram,
  MapPin,
  Calendar,
  Eye,
  Zap,
  Linkedin,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Hero = () => {
  const heroRef = useRef(null)
  const profileRef = useRef(null)
  const textRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Profile image dramatic entrance
      gsap.fromTo(
        profileRef.current,
        {
          scale: 0,
          opacity: 0,
          rotationY: -360,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 2,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5,
        },
      )

      // Text staggered animation
      gsap.fromTo(
        textRef.current.children,
        {
          y: 150,
          opacity: 0,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          delay: 1.2,
        },
      )

      // Buttons with bounce effect
      gsap.fromTo(
        buttonsRef.current.children,
        {
          y: 100,
          opacity: 0,
          scale: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "elastic.out(1, 0.8)",
          delay: 2,
        },
      )

      // Continuous floating animation
      gsap.to(profileRef.current, {
        y: -30,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
    >
      {/* Minimalist Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent-bright rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent-red rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-accent-bright rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent-red rounded-full animate-pulse delay-500"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Profile Image - Redesigned */}
            <div ref={profileRef} className="mb-10 mt-25">
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto relative">
                  {/* Outer ring with red accent */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-bright to-accent-red p-1 animate-glow">
                    <div className="w-full h-full rounded-full bg-black p-3 ">
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                        <img
                          src="/profile.jpg"
                          alt="Hridaya Manandhar"
                          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                          style={{
                            filter: "contrast(1.2) brightness(1.1)",
                          }}
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-accent-bright rounded-full border-4 border-black flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Zap className="text-white" size={100} />
                  </motion.div>

                  {/* Floating badges - minimal design */}
                  <motion.div
                    className="absolute -left-12 top-16 px-4 py-2 bg-white text-black rounded-full text-sm font-bold shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    AI/ML
                  </motion.div>
                  <motion.div
                    className="absolute -right-12 bottom-16 px-4 py-2 bg-accent-red text-white rounded-full text-sm font-bold shadow-lg"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                  >
                    Developer
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Text Content - Redesigned */}
            <div ref={textRef} className="space-y-8 mb-16">
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight">
                  <span className="text-white">HRIDAYA</span>
                  <br />
                  <span className="text-gradient-red">MANANDHAR</span>
                </h1>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary-300 tracking-wide">
                  AI/ML Developer & Full Stack Engineer
                </h2>

                {/* Personal Info - Clean Design */}
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <Calendar size={18} className="text-accent-bright" />
                    <span className="text-white font-medium">18 years old</span>
                  </div>
                  <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <MapPin size={18} className="text-accent-bright" />
                    <span className="text-white font-medium">Kathmandu, Nepal</span>
                  </div>
                </div>

                {/* Specializations - Minimal Cards */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                  {[
                    { icon: Brain, label: "Machine Learning" },
                    { icon: Code, label: "Full Stack Development" },
                    { icon: Palette, label: "UI/UX Design" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="group flex items-center space-x-4 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent-bright/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-bright to-accent-red rounded-xl flex items-center justify-center">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <span className="text-lg font-medium text-white group-hover:text-accent-bright transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xl text-primary-300 max-w-4xl mx-auto leading-relaxed mt-12">
                  Passionate 18-year-old developer from Nepal, creating intelligent solutions through AI/ML and building
                  impactful web applications. I specialize in turning complex data into actionable insights and crafting
                  beautiful, functional user experiences.
                </p>
              </div>
            </div>

            {/* Action Buttons - Redesigned */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/Hridaya_CV.pdf" download="Hridaya_CV.pdf">
                  <motion.button
                    className="group relative px-10 py-4 bg-white text-black rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden hover:bg-red-900 hover:text-white"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Download size={22} />
                      <span>Download Resume</span>
                    </div>
                  </motion.button>
                </a>

                <a href="/Hridaya_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="group relative px-10 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Eye size={22} />
                      <span>View CV</span>
                    </div>
                  </motion.button>
                </a>
              </div>

              <motion.a
                href="#contact"
                className="group relative px-10 py-4 bg-red-900 from-accent-bright to-accent-red text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:text-black hover:bg-white "
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </div>

            {/* Social Links - Minimal Design */}
            <div className="flex items-center justify-center space-x-8 mb-16">
              {[
                { icon: Github, href: "https://github.com/Heartech-Hridaya", label: "GitHub" },
                { icon: Instagram, href: "https://www.instagram.com/heart_mdr/", label: "Instagram" },
                { icon: Mail, href: "mailto:hridayamdr2007@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/hridaya-manandhar-023933339/", label: "LinkedIn" }, // ✅ Add your LinkedIn link here
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 hover:border-accent-bright/50 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-white group-hover:text-accent-bright transition-colors" size={24} />
                </motion.a>
              ))}
            </div>


            {/* Scroll Indicator */}
            <motion.div className="animate-bounce">
              <a
                href="#about"
                className="inline-block p-4 text-white hover:text-accent-bright transition-colors duration-300 rounded-full border border-white/20 hover:border-accent-bright/50"
              >
                <ArrowDown size={32} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
