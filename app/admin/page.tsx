'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  category: string
}

export default function AdminPanel() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    category: ''
  })

  useEffect(() => {
    // Load projects from localStorage
    const savedProjects = localStorage.getItem('portfolio-projects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      // Initialize with default projects
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
          technologies: ['React Native', 'react-navigation', 'react-native-paper', 'Expo'],
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
      localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects))
    }
  }, [])

  const saveProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects)
    localStorage.setItem('portfolio-projects', JSON.stringify(updatedProjects))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const projectData: Project = {
      id: editingProject?.id || Date.now().toString(),
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      link: formData.link,
      category: formData.category
    }

    if (editingProject) {
      const updatedProjects = projects.map(p => 
        p.id === editingProject.id ? projectData : p
      )
      saveProjects(updatedProjects)
    } else {
      saveProjects([...projects, projectData])
    }

    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      technologies: '',
      link: '',
      category: ''
    })
    setIsEditing(false)
    setEditingProject(null)
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      link: project.link,
      category: project.category
    })
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== id)
      saveProjects(updatedProjects)
    }
  }

  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold glow-text mb-2">Admin Panel</h1>
          <p className="text-gray-400">Manage your portfolio projects</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">
                {isEditing ? 'Edit Project' : 'Add New Project'}
              </h2>
              {isEditing && (
                <button
                  onClick={resetForm}
                  className="p-2 text-gray-400 hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full p-3 bg-gray-900 border border-primary/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-3 bg-gray-900 border border-primary/30 rounded-lg focus:border-primary focus:outline-none h-24 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) => setFormData({...formData, technologies: e.target.value})}
                  className="w-full p-3 bg-gray-900 border border-primary/30 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="React, Node.js, MongoDB"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Link</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({...formData, link: e.target.value})}
                  className="w-full p-3 bg-gray-900 border border-primary/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-3 bg-gray-900 border border-primary/30 rounded-lg focus:border-primary focus:outline-none"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Desktop Application">Desktop Application</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-dark font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Save size={20} />
                {isEditing ? 'Update Project' : 'Add Project'}
              </button>
            </form>
          </motion.div>

          {/* Projects List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Projects ({projects.length})</h2>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-900 rounded-lg p-4 border border-primary/20"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary text-dark text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{project.category}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Portfolio
          </a>
        </motion.div>
      </div>
    </div>
  )
}