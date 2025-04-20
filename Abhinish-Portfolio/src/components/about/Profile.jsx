import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'

const Profile = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="/path-to-your-image.jpg"
                alt="Profile"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600/10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With several years of experience in the industry, I've worked on various projects
              ranging from small business websites to large-scale enterprise applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Name:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Your Name</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Email:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">email@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Location:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Your Location</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Availability:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Open to opportunities</p>
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              {[
                { icon: <FaGithub />, href: 'https://github.com/yourusername' },
                { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername' },
                { icon: <FaTwitter />, href: 'https://twitter.com/yourusername' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <FaDownload />
              Download CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Profile