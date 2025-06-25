"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Award,
  Calendar,
  ExternalLink,
  Download,
  CheckCircle,
  Palette,
  BarChart3,
  Code,
  Brain,
  MapPin,
  Zap,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Certificates = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".certificates-title",
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

      // Cards flip animation
      gsap.fromTo(
        cardsRef.current.children,
        {
          y: 150,
          opacity: 0,
          rotationY: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const certificates = [
    {
      title: "Graphic Designing",
      issuer: "Elite Institute (Local Teaching)",
      date: "2024",
      description:
        "Comprehensive graphic design course covering design principles, color theory, typography, and modern design tools.",
      skills: ["Graphic Design", "Design Principles", "Typography", "Color Theory"],
      credentialUrl: "#",
      verified: true,
      icon: Palette,
    },
    {
      title: "Communicating Data Insights",
      issuer: "DataCamp",
      date: "2024",
      description:
        "Learn to effectively communicate data findings through compelling visualizations and storytelling techniques.",
      skills: ["Data Communication", "Storytelling", "Visualization", "Presentation"],
      credentialUrl: "https://datacamp.com/certificate",
      verified: true,
      icon: BarChart3,
    },
    {
      title: "Introduction to Data",
      issuer: "DataCamp",
      date: "2024",
      description:
        "Foundational course covering data types, data collection methods, and basic data analysis concepts.",
      skills: ["Data Fundamentals", "Data Types", "Data Collection", "Basic Analysis"],
      credentialUrl: "https://datacamp.com/certificate",
      verified: true,
      icon: BarChart3,
    },
    {
      title: "Introduction to Python",
      issuer: "DataCamp",
      date: "2023",
      description:
        "Comprehensive introduction to Python programming language, covering syntax, data structures, and basic programming concepts.",
      skills: ["Python", "Programming Fundamentals", "Data Structures", "Syntax"],
      credentialUrl: "https://datacamp.com/certificate",
      verified: true,
      icon: Code,
    },
    {
      title: "Python Intermediate for ML",
      issuer: "DataCamp",
      date: "2024",
      description:
        "Advanced Python programming focused on machine learning applications, including libraries like NumPy, Pandas, and Scikit-learn.",
      skills: ["Python", "Machine Learning", "NumPy", "Pandas", "Scikit-learn"],
      credentialUrl: "https://datacamp.com/certificate",
      verified: true,
      icon: Brain,
    },
    {
      title: "AI and Its Applications",
      issuer: "Kathmandu Metropolitan City - Seepmeela",
      date: "2024",
      description:
        "Government-sponsored program covering artificial intelligence fundamentals and real-world applications in various sectors.",
      skills: ["Artificial Intelligence", "AI Applications", "Machine Learning", "Technology Innovation"],
      credentialUrl: "#",
      verified: true,
      icon: MapPin,
    },
  ]

  return (
    <section id="certificates" ref={sectionRef} className="py-20 bg-gradient-to-b from-primary-900 to-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="certificates-title text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">CERTIFICATES &</span> <span className="text-gradient-red">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-bright to-accent-red mx-auto mb-8"></div>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning journey in AI/ML, data science, programming, and design
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="relative group"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-accent-bright/30 transition-all duration-300">
                {/* Certificate Header */}
                <div className="relative h-48 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center overflow-hidden">
                  <cert.icon className="text-white/30" size={80} />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-bright/10 to-accent-red/10"></div>

                  {/* Verified Badge */}
                  {cert.verified && (
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle size={14} />
                      <span>Verified</span>
                    </div>
                  )}

                  {/* Date */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-bright transition-colors duration-300 line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <Award className="text-accent-red" size={16} />
                        <p className="text-accent-bright font-medium text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-primary-200 mb-6 text-sm leading-relaxed line-clamp-3">{cert.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 bg-accent-red/20 text-accent-bright text-xs rounded-full font-medium">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-bright hover:text-white transition-colors duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={14} />
                      <span>View Credential</span>
                    </motion.a>

                    <motion.button
                      className="flex items-center space-x-2 text-primary-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "6+", label: "Certificates", icon: Award },
            { number: "3", label: "Platforms", icon: Code },
            { number: "100%", label: "Verified", icon: CheckCircle },
            { number: "2024", label: "Latest", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent-bright/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <stat.icon className="text-accent-bright mx-auto mb-3" size={32} />
              <div className="text-4xl font-bold text-gradient-red mb-2">{stat.number}</div>
              <div className="text-primary-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
