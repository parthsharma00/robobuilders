import { motion } from 'framer-motion'

const kits = [
  {
    id: 1,
    name: "AI Vision Pro",
    description: "Advanced computer vision and machine learning robotics kit",
    price: "$299",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Nano Builder",
    description: "Micro-robotics assembly kit for precision engineering",
    price: "$199",
    image: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Quantum Core",
    description: "Next-generation robotics processing unit",
    price: "$449",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
]

export const KitsZone = () => {
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
              ASSEMBLY BAY
            </span>
          </h2>
          <p className="inter text-xl text-gray-300 max-w-2xl mx-auto">
            Precision-engineered robotics kits for the next generation of builders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-glass rounded-xl p-6 hover:glow-cyan transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <h3 className="oxanium font-bold text-2xl mb-3 text-cyan-400 group-hover:text-glow">
                {kit.name}
              </h3>
              
              <p className="inter text-gray-300 mb-4 leading-relaxed">
                {kit.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="roboto-mono text-2xl font-bold text-yellow-400">
                  {kit.price}
                </span>
                <button className="inter font-medium px-4 py-2 rounded-lg bg-violet-600/20 text-violet-400 hover:bg-violet-600/40 transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}