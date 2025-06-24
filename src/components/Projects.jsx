"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Eye, Brain, Code, BarChart3, Recycle, CreditCard, Wine, Sparkles } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "WasteLink",
      description:
        "An eco-friendly web platform designed to tackle Kathmandu's waste management issues. Inspired by Uber, it connects users with waste collectors, enabling scheduled pickups, waste type reporting, and real-time location tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Tailwind CSS", "Three.js", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Heartech-Hridaya/Wastelink_E2500021_E2500066_E2500023_E2500016",
      category: "web",
      featured: true,
      icon: Recycle,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Mid Valley International College Website",
      description:
        "A dynamic, interactive platform showcasing the college's academic programs, events, and partnerships. Features animated course selection chatbots, ripple effects, team carousel, and slot-machine-style partner showcase.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React (Vite)", "Tailwind CSS", "React Three Fiber", "3D Elements"],
      liveUrl: "#",
      githubUrl: "https://github.com/sahilstha0007/MidValleyInt",
      category: "web",
      featured: true,
      icon: Code,
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "Wine & Titanic ML Prediction",
      description:
        "Machine learning project combining Titanic survival and Wine quality datasets. Analyzes patterns and trains classification algorithms for passenger survival prediction and wine quality ratings.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
      liveUrl: "https://winetitanicquality-survivalpridiction-7iev3e3989ulzqjygfmdkz.streamlit.app/",
      githubUrl: "#",
      category: "ai",
      featured: true,
      icon: Wine,
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Mini-ATM-Sim v2.0",
      description:
        "A simulated ATM system with user authentication, balance inquiry, cash withdrawal, deposit, and transaction history. Demonstrates seamless integration between frontend and backend for financial systems.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "ReactJS", "Full-Stack Development"],
      liveUrl: "#",
      githubUrl: "https://github.com/Heartech-Hridaya/Mini-ATM-Sim__v-2.0",
      category: "web",
      featured: false,
      icon: CreditCard,
      color: "from-teal-400 to-emerald-500",
    },
    {
      title: "Frame It - Hackathon Project",
      description:
        "A creative marketplace platform for artists to showcase, sell, and discover artwork. Allows users to post art, explore others' work, and purchase unique pieces, creating a supportive community for artists.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Modern Web Technologies", "Marketplace Platform", "Creative Tools"],
      liveUrl: "#",
      githubUrl: "https://github.com/smith4545454545454556/hackathon",
      category: "web",
      featured: false,
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects", icon: Code },
    { id: "ai", name: "AI/ML", icon: Brain },
    { id: "web", name: "Web Dev", icon: Code },
  ]

  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

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
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
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
                Featured Projects
              </span>
            </h2>
            <Sparkles className="text-teal-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-world projects that showcase my skills in AI/ML, web development, and problem-solving
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative group flex items-center space-x-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category.id ? "text-white" : "text-gray-400 hover:text-emerald-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <category.icon className="relative z-10" size={20} />
              <span className="relative z-10 text-lg">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Glowing background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              {/* Card content */}
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <project.icon className="text-emerald-400/30" size={100} />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-emerald-500/20 backdrop-blur-sm rounded-2xl text-white hover:bg-emerald-500/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-teal-500/20 backdrop-blur-sm rounded-2xl text-white hover:bg-teal-500/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={24} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 border border-emerald-500/30 text-emerald-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Eye size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
