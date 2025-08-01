import { motion } from 'framer-motion'
import { BookOpen, Award, Target } from 'lucide-react'

const levels = [
  {
    id: 1,
    name: "Foundation",
    icon: Target,
    description: "Master the fundamentals of robotics and AI",
    modules: 12,
    completion: "3 months",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 2,
    name: "Advanced",
    icon: BookOpen,
    description: "Deep dive into complex systems and algorithms",
    modules: 18,
    completion: "6 months",
    color: "from-cyan-400 to-blue-600"
  },
  {
    id: 3,
    name: "Expert",
    icon: Award,
    description: "Cutting-edge research and innovation",
    modules: 24,
    completion: "12 months",
    color: "from-violet-400 to-purple-600"
  }
]

export const AcademyZone = () => {
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
              KNOWLEDGE CORE
            </span>
          </h2>
          <p className="inter text-xl text-gray-300 max-w-2xl mx-auto">
            Structured learning paths designed to transform novices into robotics experts
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 animate-pulse"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {levels.map((level, index) => {
              const Icon = level.icon
              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-glass rounded-xl p-8 cursor-pointer group hover:glow-cyan transition-all duration-500"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center mb-6 group-hover:animate-spin transition-transform duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="oxanium font-bold text-2xl mb-4 text-cyan-400 group-hover:text-glow">
                      {level.name}
                    </h3>

                    <p className="inter text-gray-300 mb-6 leading-relaxed">
                      {level.description}
                    </p>

                    <div className="space-y-3 w-full">
                      <div className="flex justify-between items-center">
                        <span className="inter text-sm text-gray-400">Modules:</span>
                        <span className="roboto-mono font-bold text-cyan-400">{level.modules}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="inter text-sm text-gray-400">Duration:</span>
                        <span className="roboto-mono font-bold text-violet-400">{level.completion}</span>
                      </div>
                    </div>

                    <button className="w-full mt-6 inter font-medium py-3 rounded-lg bg-gradient-to-r from-transparent to-transparent border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                      Explore Path
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}