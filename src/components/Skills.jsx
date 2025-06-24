"use client"

import { motion } from "framer-motion"
import { Brain, Code, Palette, Coffee, Sparkles } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-500/20",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Three.js", level: 80 },
        { name: "Framer Motion", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 92 },
      ],
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      color: "from-teal-500 to-emerald-600",
      borderColor: "border-teal-500/20",
      skills: [
        { name: "Python", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Pandas", level: 82 },
        { name: "Matplotlib", level: 78 },
        { name: "Seaborn", level: 75 },
        { name: "Data Analysis (EDA)", level: 85 },
      ],
    },
    {
      title: "Design & Database",
      icon: Palette,
      color: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-400/20",
      skills: [
        { name: "Figma", level: 88 },
        { name: "Graphic Design", level: 75 },
        { name: "SQL", level: 80 },
        { name: "UI/UX Design", level: 82 },
        { name: "Prototyping", level: 78 },
        { name: "Visual Analytics", level: 80 },
      ],
    },
    {
      title: "Programming Languages",
      icon: Coffee,
      color: "from-teal-400 to-emerald-500",
      borderColor: "border-teal-400/20",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 60 },
        { name: "C Programming", level: 55 },
        { name: "SQL", level: 80 },
        { name: "TypeScript", level: 70 },
      ],
    },
  ]

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
                Skills & Expertise
              </span>
            </h2>
            <Sparkles className="text-teal-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From machine learning algorithms to beautiful user interfaces, here are the technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Glowing background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>

              {/* Card content */}
              <div
                className={`relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border ${category.borderColor} group-hover:border-emerald-500/40 transition-all duration-300`}
              >
                <div className="flex items-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-6`}
                  >
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                        <span className="text-emerald-400 font-semibold text-lg">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`bg-gradient-to-r ${category.color} h-3 rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Machine Learning",
              "Data Visualization",
              "Statistical Analysis",
              "Web Development",
              "Responsive Design",
              "API Integration",
              "Version Control (Git)",
              "Problem Solving",
              "Team Collaboration",
              "Project Management",
              "Agile Development",
              "Testing & Debugging",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 border border-emerald-500/30 rounded-2xl text-emerald-400 font-medium hover:border-emerald-400/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
