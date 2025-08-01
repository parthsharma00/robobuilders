import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-[#0A0E1A] border-t border-cyan-400/20 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="oxanium font-bold text-2xl text-cyan-400 mb-4 text-glow">
              RoboBuilders Nexus
            </h3>
            <p className="inter text-gray-300 mb-6 leading-relaxed max-w-md">
              Pioneering the future of robotics education through immersive learning experiences, 
              cutting-edge technology, and innovative engineering solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center hover:bg-violet-600/40 transition-colors duration-300">
                <Github className="w-5 h-5 text-violet-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center hover:bg-cyan-600/40 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-cyan-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center hover:bg-violet-600/40 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-violet-400" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="oxanium font-semibold text-lg text-cyan-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <li><a href="#kits" className="inter text-gray-300 hover:text-cyan-400 transition-colors duration-300">Assembly Bay</a></li>
              <li><a href="#classes" className="inter text-gray-300 hover:text-cyan-400 transition-colors duration-300">Command Center</a></li>
              <li><a href="#academy" className="inter text-gray-300 hover:text-cyan-400 transition-colors duration-300">Knowledge Core</a></li>
              <li><a href="#showcase" className="inter text-gray-300 hover:text-cyan-400 transition-colors duration-300">Innovation Gallery</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="oxanium font-semibold text-lg text-cyan-400 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-violet-400 mr-3" />
                <span className="inter text-gray-300 text-sm">info@robobuilders.nexus</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-violet-400 mr-3" />
                <span className="inter text-gray-300 text-sm">+1 (555) 123-ROBO</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 text-violet-400 mr-3" />
                <span className="inter text-gray-300 text-sm">Innovation District, Tech City</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="inter text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 RoboBuilders Nexus. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="inter text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="inter text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="inter text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Support</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}