'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  category: string
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    // Load projects from localStorage
    const savedProjects = localStorage.getItem('portfolio-projects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      // Default projects if none saved
      const defaultProjects: Project[] = [
        {
          id: '1',
          title: 'Wall of Gardens',
          description: 'This Website I Have Created for a BusinessMan To Grow His Business Online!',
          technologies: ['WordPress'],
          link: 'https://wallofgardens.com/',
          category: 'Web Development'
        },
        {
          id: '2',
          title: 'Simple Portfolio App',
          description: 'This App is a collection from my top downloading app This is just a Portfolio type app',
          technologies: ['React Native', 'Expo'],
          link: 'https://github.com/hackhaveli/Portfolio-App-with-react-native',
          category: 'Mobile Development'
        },
        {
          id: '3',
          title: 'Vid-Get',
          description: "It's a website where you can grab YouTube videos in top quality and even download entire playlists!",
          technologies: ['Frontend', 'Backend', 'Database'],
          link: 'https://vid-get.onrender.com/',
          category: 'Web Development'
        }
      ]
      setProjects(defaultProjects)
    }
  }, [])

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-dark'
                    : 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-dark'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-lg overflow-hidden card-hover group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold glow-text group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-primary hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary text-dark text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{project.category}</span>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-dark transition-all duration-300 text-sm font-medium"
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/admin"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Manage Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects