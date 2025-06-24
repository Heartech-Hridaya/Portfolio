"use client"

import { motion } from "framer-motion"
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
  Sparkles,
} from "lucide-react"

const Certificates = () => {
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
      image: "/placeholder.svg?height=200&width=300",
      icon: Palette,
      color: "from-emerald-500 to-teal-600",
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
      image: "/placeholder.svg?height=200&width=300",
      icon: BarChart3,
      color: "from-teal-500 to-emerald-600",
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
      image: "/placeholder.svg?height=200&width=300",
      icon: BarChart3,
      color: "from-emerald-400 to-teal-500",
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
      image: "/placeholder.svg?height=200&width=300",
      icon: Code,
      color: "from-teal-400 to-emerald-500",
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
      image: "/placeholder.svg?height=200&width=300",
      icon: Brain,
      color: "from-emerald-500 to-teal-600",
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
      image: "/placeholder.svg?height=200&width=300",
      icon: MapPin,
      color: "from-teal-500 to-emerald-600",
    },
  ]

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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
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
                Certificates & Achievements
              </span>
            </h2>
            <Sparkles className="text-teal-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning journey in AI/ML, data science, programming, and design
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Glowing background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              {/* Card content */}
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                {/* Certificate Header */}
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                  <cert.icon className="text-emerald-400/30" size={80} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-10`}></div>

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
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <Award className="text-teal-500" size={16} />
                        <p className="text-teal-400 font-medium text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">{cert.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 bg-slate-700 text-gray-400 text-xs rounded-full font-medium">
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
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={14} />
                      <span>View Credential</span>
                    </motion.a>

                    <motion.button
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
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
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: "6+", label: "Certificates" },
            { number: "3", label: "Platforms" },
            { number: "100%", label: "Verified" },
            { number: "2024", label: "Latest" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
