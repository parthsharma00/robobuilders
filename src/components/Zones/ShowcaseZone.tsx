import { motion } from 'framer-motion'
import { ExternalLink, User, Calendar } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Autonomous Drone Swarm",
    student: "Alex Chen",
    date: "2024",
    description: "Self-coordinating drone network for search and rescue operations",
    image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["AI", "Swarm Intelligence", "Autonomous Systems"]
  },
  {
    id: 2,
    title: "Bionic Prosthetic Arm",
    student: "Maria Rodriguez",
    date: "2024",
    description: "Neural-controlled prosthetic with haptic feedback",
    image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Bioengineering", "Neural Interface", "Haptics"]
  },
  {
    id: 3,
    title: "Smart Agriculture Bot",
    student: "David Kumar",
    date: "2024",
    description: "Precision farming robot with computer vision",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Agriculture", "Computer Vision", "IoT"]
  },
  {
    id: 4,
    title: "Underwater Explorer",
    student: "Sarah Johnson",
    date: "2024",
    description: "Deep-sea exploration robot with advanced sensors",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Marine Robotics", "Sensors", "Exploration"]
  }
]

export const ShowcaseZone = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="oxanium font-bold text-5xl md:text-6xl mb-6 text-glow">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              INNOVATION GALLERY
            </span>
          </h2>
          <p className="inter text-xl text-gray-300 max-w-2xl mx-auto">
            Witness the extraordinary creations of our student innovators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-glass rounded-xl overflow-hidden group cursor-pointer hover:glow-violet transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-cyan-400/40 transition-colors duration-300">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="oxanium font-bold text-xl mb-2 text-cyan-400 group-hover:text-glow">
                  {project.title}
                </h3>

                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span className="inter">{project.student}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="roboto-mono">{project.date}</span>
                  </div>
                </div>

                <p className="inter text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-violet-500/20 text-violet-400 inter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}