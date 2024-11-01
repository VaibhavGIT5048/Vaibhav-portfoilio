import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            I'm Vaibhav, a driven Computer Science enthusiast deeply immersed in the realms of Data Science and AI. With a hands-on approach to transformative technologies like Python, SQL, Tableau, and Excel, I turn raw data into actionable, impactful insights.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Fueled by an insatiable curiosity and a relentless pursuit of mastery, I delve into the art and science of data, constantly pushing the boundaries of what's possible. My projects are more than just code; they're dynamic explorations into the intelligent, data-driven future we can shape together. Join me as we transform data into wisdom and leverage technology for tomorrow's innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}