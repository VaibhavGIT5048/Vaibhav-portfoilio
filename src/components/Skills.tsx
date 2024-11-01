import { motion } from 'framer-motion';

const techSkills = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 50 },
  { name: 'Tableau', level: 90 },
  { name: 'Excel', level: 70 },
  { name: 'Data Analysis', level: 88 },
  { name: 'Machine Learning', level: 25 },
];

const softSkills = [
  'Problem Solving',
  'Critical Thinking',
  'Communication',
  'Team Leadership',
  'Project Management',
  'Adaptability',
];

export default function Skills() {
  return (
    <section className="bg-gray-800 py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                >
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}