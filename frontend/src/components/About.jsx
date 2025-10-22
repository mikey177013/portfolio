import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../mock';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const skillCategories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-[#1a0f2e] via-[#150a25] to-[#0f0f1a] py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            The Lore
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Avatar and Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <img
                src={personalInfo.avatar}
                alt="Mikey Avatar"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{personalInfo.name}</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <span className="text-cyan-400 font-mono">📍 {personalInfo.location}</span>
              </div>
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <span className="text-purple-400 font-mono">✉️ {personalInfo.email}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Power Levels</span>
          </h3>

          {/* Skills by Category */}
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div key={category}>
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="bg-[#1a1a2e] border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-semibold flex items-center gap-2">
                              <span className="text-2xl">{skill.icon}</span>
                              {skill.name}
                            </span>
                            <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full relative"
                            >
                              <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;