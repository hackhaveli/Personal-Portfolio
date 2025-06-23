'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold glow-text cursor-pointer"
            >
              &lt; CodeWithRohit /&gt;
            </motion.h3>
          </div>
          
          <div className="border-t border-primary/20 pt-6">
            <p className="text-gray-400">
              Copyright © 2025 &lt; CodeWithRohit /&gt;. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer