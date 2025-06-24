"use client"

import { motion } from "framer-motion"
import { Brain, Code, Palette, Database, Sparkles, Target, Lightbulb, Heart } from "lucide-react"

const About = () => {
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

  const features = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description:
        "Passionate about machine learning algorithms, data analysis, and creating intelligent solutions that solve real-world problems.",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building modern, scalable web applications with React, Python, and cutting-edge technologies for seamless user experiences.",
      color: "from-teal-500 to-emerald-600",
      borderColor: "border-teal-500/20",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces with Figma and modern design principles that prioritize user experience.",
      color: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-400/20",
    },
    {
      icon: Database,
      title: "Data Analysis",
      description:
        "Extracting meaningful insights from complex datasets using Python, pandas, and advanced visualization techniques.",
      color: "from-teal-400 to-emerald-500",
      borderColor: "border-teal-400/20",
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
                About Me
              </span>
            </h2>
            <Sparkles className="text-teal-400 ml-3" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer from Nepal, bridging the gap between AI innovation and real-world solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
          {/* Story Section */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-emerald-500/20"
              variants={itemVariants}
            >
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Hridaya Manandhar, an 18-year-old AI/ML enthusiast and full-stack developer from Kathmandu,
                Nepal. My journey began with a curiosity about how technology can solve real-world problems, especially
                those affecting my local community.
              </p>
            </motion.div>

            <motion.div
              className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-teal-500/20"
              variants={itemVariants}
            >
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">My Passion</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in Python for data science, React.js for frontend development, and a keen eye for design,
                I love tackling complex challenges. From waste management solutions for Kathmandu to machine learning
                models, I'm always excited to learn and innovate.
              </p>
            </motion.div>

            <motion.div
              className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-emerald-500/20"
              variants={itemVariants}
            >
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">My Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the power of technology to create positive impact. Whether it's building intelligent
                systems, crafting beautiful user interfaces, or analyzing data for insights, I'm committed to using my
                skills to make a difference in the world.
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
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
              ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 border border-emerald-500/30 rounded-full text-emerald-400 font-medium hover:border-emerald-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Glowing background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Card content */}
                <div
                  className={`relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border ${feature.borderColor} group-hover:border-emerald-500/40 transition-all duration-300`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
