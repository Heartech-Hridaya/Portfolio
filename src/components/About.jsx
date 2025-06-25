"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Brain, Code, Palette, Database, Target, Lightbulb, Heart, Zap } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const [flippedCards, setFlippedCards] = useState(new Set())

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        ".about-title",
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

      // Cards flip animation on scroll
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
            onEnter: () => {
              // Auto-flip cards one by one
              setTimeout(() => {
                cardsRef.current.children[0]?.classList.add("flipped")
                setTimeout(() => {
                  cardsRef.current.children[1]?.classList.add("flipped")
                  setTimeout(() => {
                    cardsRef.current.children[2]?.classList.add("flipped")
                    setTimeout(() => {
                      cardsRef.current.children[3]?.classList.add("flipped")
                    }, 300)
                  }, 300)
                }, 300)
              }, 500)
            },
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description:
        "Passionate about machine learning algorithms, data analysis, and creating intelligent solutions that solve real-world problems.",
      backContent: "Python • TensorFlow • Scikit-learn • Data Analysis • Neural Networks • Deep Learning",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building modern, scalable web applications with React, Python, and cutting-edge technologies for seamless user experiences.",
      backContent: "React.js • Node.js • Python • JavaScript • API Development • Database Design",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces with Figma and modern design principles that prioritize user experience.",
      backContent: "Figma • Adobe Creative Suite • Prototyping • User Research • Design Systems",
    },
    {
      icon: Database,
      title: "Data Analysis",
      description:
        "Extracting meaningful insights from complex datasets using Python, pandas, and advanced visualization techniques.",
      backContent: "Pandas • NumPy • Matplotlib • Seaborn • SQL • Statistical Analysis • Data Visualization",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Problem Solver",
      description:
        "I believe in using technology to solve meaningful problems and create positive impact in communities.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description:
        "Always exploring new technologies, frameworks, and methodologies to stay at the forefront of innovation.",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description:
        "Passionate about creating solutions that benefit my local community and address real-world challenges.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-primary-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="about-title text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">ABOUT</span> <span className="text-gradient-red">ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-bright to-accent-red mx-auto mb-8"></div>
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer from Nepal, bridging the gap between AI innovation and real-world solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto mb-20">
          {/* Story Section - Redesigned */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Main Story Card */}
            <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
              <div className="absolute top-6 right-6">
                <Zap className="text-accent-bright" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-lg text-primary-200 leading-relaxed mb-6">
                Hello! I'm <span className="text-red-900 text-2xl font-bold">Hridaya Manandhar</span>, an 18-year-old AI/ML enthusiast and full-stack developer from Kathmandu,
                Nepal. My journey began with a curiosity about how technology can solve real-world problems, especially
                those affecting my local community.
              </p>
              <p className="text-lg text-primary-200 leading-relaxed">
                With expertise in Python for data science, React.js for frontend development, and a keen eye for design,
                I love tackling complex challenges. From waste management solutions for Kathmandu to machine learning
                models, I'm always excited to learn and innovate.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "React.js",
                  "Machine Learning",
                  "Data Analysis",
                  "Tailwind CSS",
                  "Three.js",
                  "Figma",
                  "SQL",
                  "NumPy",
                  "Pandas",
                  "JavaScript",
                  "Node.js",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-red-900 hover:text-white transition-all duration-500"
                    whileHover={{ scale: 1.3, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.01 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Grid with Flip Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="flip-card h-80">
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 h-full flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent-bright to-accent-red rounded-2xl flex items-center justify-center mb-6">
                        <feature.icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-primary-200 leading-relaxed flex-1">{feature.description}</p>
                      <div className="mt-4 text-accent-bright text-sm font-medium">Hover to see skills →</div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back">
                    <div className="relative bg-red-900 rounded-3xl p-6 h-full flex flex-col justify-center items-center text-center">
                      <feature.icon className="text-white mb-6" size={40} />
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-white/90 leading-relaxed">{feature.backContent}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-accent-bright/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-bright to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-primary-200 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
