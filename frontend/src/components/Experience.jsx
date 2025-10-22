import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#0a0a0f] to-[#1a0f2e] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
            The Path
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6">My journey through tech and chaos</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="w-16 h-16 bg-[#1a1a2e] border-4 border-cyan-400 rounded-full flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/50"
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[#1a1a2e] border border-purple-500/30 rounded-lg p-6 shadow-xl shadow-purple-500/20 hover:border-purple-500/60 transition-all duration-300"
                  >
                    <div className="text-cyan-400 font-bold text-2xl mb-2">{exp.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-purple-400 font-semibold mb-3">{exp.company}</h4>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;