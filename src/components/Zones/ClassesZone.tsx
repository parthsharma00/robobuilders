import { motion } from 'framer-motion'
import { Play, Clock, Users } from 'lucide-react'

const classes = [
  {
    id: 1,
    title: "AI Fundamentals",
    duration: "8 weeks",
    students: 1247,
    level: "Beginner",
    thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Advanced Robotics",
    duration: "12 weeks",
    students: 892,
    level: "Advanced",
    thumbnail: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Machine Learning",
    duration: "10 weeks",
    students: 1556,
    level: "Intermediate",
    thumbnail: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
]

export const ClassesZone = () => {
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
              COMMAND CENTER
            </span>
          </h2>
          <p className="inter text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive learning experiences designed by industry experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {classes.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-glass rounded-xl overflow-hidden group cursor-pointer hover:glow-violet transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-cyan-400 ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="oxanium font-bold text-xl mb-3 text-cyan-400 group-hover:text-glow">
                  {course.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="roboto-mono">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="roboto-mono">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full inter font-medium py-3 rounded-lg gradient-violet text-white hover:scale-105 transition-transform duration-200">
                  Start Learning
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}