'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Shield } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'I provide website creation services, the website will be created according to the wishes of the client.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'I provide App Development services, the App will be created according to the wishes of the client.',
      features: ['Cross Platform', 'Native Performance', 'User Friendly', 'Scalable Architecture']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'I provide cybersecurity services including penetration testing and security audits.',
      features: ['Penetration Testing', 'Security Audits', 'Vulnerability Assessment', 'Security Consulting']
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-lg p-8 text-center card-hover group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors"
              >
                <service.icon className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 glow-text">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services