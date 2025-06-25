"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Brain, Code, Palette, Coffee, Zap } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Skills = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".skills-title",
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
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.3,
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
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
      skills: [
        { name: "Python", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Pandas", level: 82 },
        { name: "Matplotlib", level: 78 },
        { name: "Seaborn", level: 75 },
        { name: "Data Analysis", level: 85 },
      ],
    },
    {
      title: "Design & Database",
      icon: Palette,
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-primary-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="skills-title text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">SKILLS &</span> <span className="text-gradient-red">EXPERTISE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-bright to-accent-red mx-auto mb-8"></div>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            From machine learning algorithms to beautiful user interfaces, here are the technologies I work with
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-accent-bright/30 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-bright to-accent-red flex items-center justify-center mr-6">
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
                        <span className="text-white font-medium text-lg">{skill.name}</span>
                        <span className="text-accent-bright font-bold text-lg">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-accent-bright to-accent-red h-3 rounded-full relative overflow-hidden"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        >
                          <div className="absolute inset-0 bg-red-900 animate-pulse"></div>
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-center mb-8">
            <Zap className="text-accent-bright mr-3" size={32} />
            <h3 className="text-3xl font-bold text-white">Additional Expertise</h3>
            <Zap className="text-accent-red ml-3" size={32} />
          </div>
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
                className="px-6 py-3 bg-white text-black rounded-2xl font-medium hover:bg-red-900 hover:text-white transition-all duration-300"
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
