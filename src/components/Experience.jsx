"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, Trophy, Code, Award, Sparkles } from "lucide-react"

const Experience = () => {
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
      color: "from-emerald-500 to-teal-600",
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
      color: "from-teal-500 to-emerald-600",
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
      color: "from-emerald-400 to-teal-500",
    },
  ]

  const getTypeBadge = (type) => {
    switch (type) {
      case "project":
        return { text: "Current Project", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" }
      case "achievement":
        return { text: "Achievement", color: "bg-teal-500/20 text-teal-400 border-teal-500/30" }
      case "learning":
        return { text: "Learning", color: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30" }
      default:
        return { text: "Experience", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" }
    }
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
                Experience & Achievements
              </span>
            </h2>
            <Sparkles className="text-teal-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey in technology, from winning hackathons to building real-world applications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-400 rounded-full"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                className="relative flex items-start mb-16 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 sm:left-6 w-8 h-8 bg-gradient-to-r ${experience.color} rounded-full border-4 border-slate-900 shadow-lg flex items-center justify-center z-10`}
                >
                  <experience.icon className="text-white" size={16} />
                </div>

                {/* Content */}
                <div className="ml-16 sm:ml-24 w-full">
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>

                    {/* Card content */}
                    <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
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
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-400 mb-2">
                            <div className="flex items-center space-x-2">
                              <Briefcase size={18} />
                              <span className="font-semibold text-emerald-400 text-lg">{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin size={18} />
                              <span className="text-lg">{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-teal-400 font-semibold text-lg">
                          <Calendar size={18} />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {experience.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start space-x-3 text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-lg leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 bg-slate-700/50 border border-emerald-500/30 rounded-2xl text-emerald-400 font-medium hover:border-emerald-400/50 transition-all duration-300"
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
                  </motion.div>
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
