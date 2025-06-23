'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap,
  FaPython, FaLinux, FaWordpress, FaDatabase, FaGamepad, FaWifi
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si'
import Image from 'next/image'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaLinux, name: 'Linux', color: '#FCC624' },
    { icon: FaBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: FaDatabase, name: 'Database', color: '#336791' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: FaWordpress, name: 'WordPress', color: '#21759B' },
    { icon: FaWifi, name: 'Networking', color: '#00fa00' },
    { icon: FaGamepad, name: 'Gaming', color: '#00fa00' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden border-2 border-primary glow-border"
              >
                <Image
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
                  alt="About Rohit"
                  width={400}
                  height={500}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* History */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 card-hover"
            >
              <h3 className="text-2xl font-bold glow-text mb-4">My History</h3>
              <div className="w-16 h-1 bg-primary mb-4"></div>
              <p className="text-gray-300 leading-relaxed">
                Hey, I'm Rohit Sharma, but you can call me Coderrohit. Currently based in Delhi, 
                my journey into web development began back in 8th grade. I was hooked on hacker movies, 
                and as I explored the world of hacking, I stumbled upon web programming. What started as 
                curiosity turned into a passion for web development, and that's how I discovered my love 
                for creating digital experiences.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg p-6 card-hover"
            >
              <h3 className="text-2xl font-bold glow-text mb-4">Skills</h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <skill.icon 
                      className="text-3xl mb-2 transition-colors duration-300" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs text-center group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About