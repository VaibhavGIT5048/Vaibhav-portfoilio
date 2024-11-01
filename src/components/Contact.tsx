import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-gray-900 py-20" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span>Dwarka,New Delhi,India</span>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-blue-500" />
                  <a href="mailto:vaibhav.gupta7047@gmail.com" className="hover:text-blue-400 transition-colors">
                    vaibhav.gupta7047@gmail.com
                  </a>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/VaibhavGIT5048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vaibhav-gupta-4a11b0288/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}