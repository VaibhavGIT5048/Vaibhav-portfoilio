import { motion } from 'framer-motion';
import { Code2, Database, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
              Vaibhav
            </span>
          </h1>
          <h2 className="text-4xl font-semibold text-gray-300 mb-8">
            Data Scientist | Data Analyst 
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Passionate Computer Science student focused on Data Science and AI, skilled in Python, SQL, Tableau, and Excel.
          </p>
          
          <div className="flex justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                <Database className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-gray-300">Data Science</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                <Code2 className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-gray-300">Development</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                <LineChart className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-gray-300">Analytics</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}