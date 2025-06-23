'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Github, Youtube, Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contacts = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91 9311459543',
      href: 'https://wa.me/9311459543',
      color: '#25D366'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'coderrohit2927@gmail.com',
      href: 'mailto:coderrohit2927@gmail.com',
      color: '#EA4335'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'hackhaveli',
      href: 'https://github.com/hackhaveli',
      color: '#333'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: 'CodeWithRohit',
      href: 'https://youtube.com/@codewithrohit2927',
      color: '#FF0000'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'rohit_hcr2',
      href: 'https://instagram.com/rohit_hcr2',
      color: '#E4405F'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's connect and discuss your next project. I'm always excited to work on new challenges!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-effect rounded-lg p-6 text-center card-hover group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: `${contact.color}20` }}
              >
                <contact.icon 
                  className="w-8 h-8 transition-colors duration-300" 
                  style={{ color: contact.color }}
                />
              </motion.div>
              
              <h3 className="text-lg font-bold mb-2 glow-text group-hover:text-white transition-colors">
                {contact.label}
              </h3>
              
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold glow-text mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-300 mb-6">
              I'm currently available for freelance work and exciting opportunities. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="mailto:coderrohit2927@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors btn-glow"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact