"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, MapPin, Briefcase, Trophy, Code, Award } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Experience = () => {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".experience-title",
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

      // Timeline items animation
      gsap.fromTo(
        timelineRef.current.children,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const experiences = [
    {
      title: "Web Developer",
      company: "Mid Valley International College",
      location: "Current Project",
      period: "2024 - Present",
      type: "project",
      description: [
        "Developing the official college website using modern web technologies",
        "Implementing responsive design with React.js and Tailwind CSS",
        "Creating interactive user interfaces with smooth animations",
        "Optimizing website performance and user experience",
        "Collaborating with college administration for requirements gathering",
      ],
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Three.js"],
      icon: Code,
    },
    {
      title: "Hackathon Winner",
      company: "Tech Innovation Challenge",
      location: "Competition",
      period: "2024",
      type: "achievement",
      description: [
        "🏆 Won first place in a competitive hackathon event",
        "Developed an innovative AI-powered solution within 48 hours",
        "Led a team of developers to create a functional prototype",
        "Presented the solution to industry experts and judges",
        "Demonstrated strong problem-solving and teamwork skills",
      ],
      technologies: ["Python", "Machine Learning", "React.js", "API Integration"],
      icon: Trophy,
    },
    {
      title: "AI/ML Learning Journey",
      company: "Self-Directed Learning",
      location: "Personal Development",
      period: "2023 - Present",
      type: "learning",
      description: [
        "Mastered Python programming for data science and machine learning",
        "Completed comprehensive courses in NumPy, Pandas, and data visualization",
        "Built multiple data analysis projects using real-world datasets",
        "Developed expertise in exploratory data analysis (EDA) techniques",
        "Created interactive visualizations using Matplotlib and Seaborn",
      ],
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      icon: Award,
    },
  ]

  const getTypeBadge = (type) => {
    switch (type) {
      case "project":
        return { text: "Current Project", color: "bg-accent-bright/20 text-accent-bright border-accent-bright/30" }
      case "achievement":
        return { text: "Achievement", color: "bg-accent-red/20 text-accent-red border-accent-red/30" }
      case "learning":
        return { text: "Learning", color: "bg-white/20 text-white border-white/30" }
      default:
        return { text: "Experience", color: "bg-white/20 text-white border-white/30" }
    }
  }

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="experience-title text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">EXPERIENCE &</span> <span className="text-gradient-red">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-bright to-accent-red mx-auto mb-8"></div>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            My journey in technology, from winning hackathons to building real-world applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative" ref={timelineRef}>
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-5 bg-red-900 rounded-full"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                className="relative flex items-start mb-16 last:mb-0"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 w-8 h-8 bg-gradient-to-r from-accent-bright to-accent-red rounded-full border-4 border-black shadow-lg flex items-center justify-center z-10">
                  <experience.icon className="text-white" size={16} />
                </div>

                {/* Content */}
                <div className="ml-16 sm:ml-24 w-full">
                  <div className="relative group">
                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-accent-bright/30 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="mb-4 lg:mb-0">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                            <span
                              className={`px-4 py-1 rounded-full text-sm font-medium border ${getTypeBadge(experience.type).color}`}
                            >
                              {getTypeBadge(experience.type).text}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-primary-300 mb-2">
                            <div className="flex items-center space-x-2">
                              <Briefcase size={18} />
                              <span className="font-semibold text-accent-bright text-lg">{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin size={18} />
                              <span className="text-lg">{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-accent-red font-semibold text-lg">
                          <Calendar size={18} />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {experience.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start space-x-3 text-primary-200"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-lg leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 bg-white/10 border border-white/20 rounded-2xl text-white font-medium hover:border-accent-bright/50 hover:bg-accent-bright/10 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
