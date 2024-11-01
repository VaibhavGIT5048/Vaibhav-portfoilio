import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Car Sales Analytics Dashboard',
    description: 'Interactive dashboard built with Tableau showcasing comprehensive car sales analysis with dynamic filters and real-time insights.',
    image: 'https://i.ytimg.com/vi/J_QHdHgRJow/hqdefault.jpg',
    link: 'https://public.tableau.com/app/profile/vaibhav.gupta7707/viz/Car_sales_dashboard/Dashboard1?publish=yes',
    tech: ['Tableau', 'Data Analysis', 'Business Intelligence']
  },
  {
    title: 'EPL Data Analysis',
    description: 'Project Structure Data Source: Football statistics dataset (includes metrics like goals, assists, minutes played, passing accuracy, and disciplinary records). Tool: Tableau Desktop / Tableau Public for visualization and dashboard creation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: 'https://github.com/VaibhavGIT5048/Data_Analysis.git',
    tech: ['Python', 'Data Analysis', 'Tableau']
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="bg-gray-900 py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative group h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}