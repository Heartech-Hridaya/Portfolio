"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github, Eye, Brain, Code, BarChart3, Recycle, CreditCard, Wine } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Projects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".projects-title",
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

      // Cards animation
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

  const projects = [
    {
      title: "WasteLink",
      description:
        "An eco-friendly web platform designed to tackle Kathmandu's waste management issues. Inspired by Uber, it connects users with waste collectors, enabling scheduled pickups, waste type reporting, and real-time location tracking.",
      technologies: ["React", "Tailwind CSS", "Three.js", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Heartech-Hridaya/Wastelink_E2500021_E2500066_E2500023_E2500016",
      category: "web",
      featured: true,
      icon: Recycle,
    },
    {
      title: "Mid Valley International College Website",
      description:
        "A dynamic, interactive platform showcasing the college's academic programs, events, and partnerships. Features animated course selection chatbots, ripple effects, team carousel, and slot-machine-style partner showcase.",
      technologies: ["React (Vite)", "Tailwind CSS", "React Three Fiber", "3D Elements"],
      liveUrl: "#",
      githubUrl: "https://github.com/sahilstha0007/MidValleyInt",
      category: "web",
      featured: true,
      icon: Code,
    },
    {
      title: "Wine & Titanic ML Prediction",
      description:
        "Machine learning project combining Titanic survival and Wine quality datasets. Analyzes patterns and trains classification algorithms for passenger survival prediction and wine quality ratings.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
      liveUrl: "https://winetitanicquality-survivalpridiction-7iev3e3989ulzqjygfmdkz.streamlit.app/",
      githubUrl: "#",
      category: "ai",
      featured: true,
      icon: Wine,
    },
    {
      title: "Mini-ATM-Sim v2.0",
      description:
        "A simulated ATM system with user authentication, balance inquiry, cash withdrawal, deposit, and transaction history. Demonstrates seamless integration between frontend and backend for financial systems.",
      technologies: ["Python", "ReactJS", "Full-Stack Development"],
      liveUrl: "#",
      githubUrl: "https://github.com/Heartech-Hridaya/Mini-ATM-Sim__v-2.0",
      category: "web",
      featured: false,
      icon: CreditCard,
    },
    {
      title: "Frame It - Hackathon Project",
      description:
        "A creative marketplace platform for artists to showcase, sell, and discover artwork. Allows users to post art, explore others' work, and purchase unique pieces, creating a supportive community for artists.",
      technologies: ["Modern Web Technologies", "Marketplace Platform", "Creative Tools"],
      liveUrl: "#",
      githubUrl: "https://github.com/smith4545454545454556/hackathon",
      category: "web",
      featured: false,
      icon: BarChart3,
    },
  ]

  const categories = [
    { id: "all", name: "All Projects", icon: Code },
    { id: "ai", name: "AI/ML", icon: Brain },
    { id: "web", name: "Web Dev", icon: Code },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-primary-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="projects-title text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">FEATURED</span> <span className="text-gradient-red">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-bright to-accent-red mx-auto mb-8"></div>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            Real-world projects that showcase my skills in AI/ML, web development, and problem-solving
          </p>
        </div>

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
                activeCategory === category.id
                  ? "text-white bg-gradient-to-r from-accent-bright to-accent-red"
                  : "text-primary-300 hover:text-white bg-white/5 border border-white/10 hover:border-accent-bright/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon size={20} />
              <span className="text-lg">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-accent-bright/30 transition-all duration-300">
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                  <project.icon className="text-white/30" size={100} />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-accent-bright/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-accent-bright/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={24} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-bright transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-accent-bright to-accent-red text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-primary-200 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 text-white text-sm rounded-full"
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
                      className="flex items-center space-x-2 text-accent-bright hover:text-white transition-colors duration-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Eye size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-300 hover:text-white transition-colors duration-200 font-medium"
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
        </div>
      </div>
    </section>
  )
}

export default Projects
