import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Filter } from 'lucide-react';
import { githubRepos, githubStats } from '../mock';

const GitHubProjects = () => {
  const [filter, setFilter] = useState('All');
  const languages = ['All', ...new Set(githubRepos.map(repo => repo.language))];
  
  const filteredRepos = filter === 'All' 
    ? githubRepos 
    : githubRepos.filter(repo => repo.language === filter);

  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    'Node.js': '#68a063'
  };

  return (
    <section id="github" className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#0a0a0f] to-[#1a0f2e] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-4">
            The Arsenal
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6">My open-source contributions and personal projects</p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Repositories', value: githubStats.repos, color: 'cyan' },
            { label: 'Stars', value: githubStats.stars, color: 'yellow' },
            { label: 'Followers', value: githubStats.followers, color: 'pink' },
            { label: 'Contributions', value: githubStats.contributions, color: 'purple' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-[#1a1a2e] border border-${stat.color}-500/30 rounded-lg p-6 text-center hover:border-${stat.color}-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-${stat.color}-500/20`}
            >
              <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2`}>
                {stat.value.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 flex-wrap"
        >
          <Filter className="text-cyan-400" size={20} />
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === lang
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-[#1a1a2e] text-gray-400 border border-cyan-500/30 hover:border-cyan-500/60'
              }`}
            >
              {lang}
            </button>
          ))}
        </motion.div>

        {/* Repository Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-[#1a1a2e] border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                  {repo.name}
                </h3>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {repo.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: languageColors[repo.language] || '#888' }}
                  />
                  <span className="text-gray-400 text-sm">{repo.language}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} />
                    <span className="text-sm">{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <GitFork size={16} />
                    <span className="text-sm">{repo.forks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;