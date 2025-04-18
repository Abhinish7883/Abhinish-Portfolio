import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaAward, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Led development of multiple web applications, improving performance and user experience.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed and maintained various web applications using modern technologies.",
      achievements: [
        "Developed 10+ client projects",
        "Reduced bug reports by 60%",
        "Mentored junior developers"
      ]
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Profile Image */}
            <div className="md:col-span-4 flex justify-center items-start">
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl overflow-hidden">
                  <img
                    src="/your-profile-image.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-indigo-500 text-white p-2 rounded-xl shadow-lg">
                  <FaCode className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Abhinish Tiwari
                </h3>
                <p className="text-lg text-indigo-600 dark:text-indigo-400">
                  Full Stack Developer
                </p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Passionate Full Stack Developer with expertise in building modern web applications.
                I specialize in creating responsive, user-friendly interfaces and robust backend systems.
                With a strong foundation in both frontend and backend technologies, I bring ideas to life
                through clean, efficient code.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/path-to-cv.pdf" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Download CV
                </a>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <FaBriefcase className="text-indigo-500" />
            Professional Experience
          </h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-indigo-500"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-indigo-500 rounded-full ring-4 ring-white dark:ring-gray-800"></div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                  <p className="text-indigo-500 dark:text-indigo-400 font-medium">{exp.company} • {exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-3">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                        <FaAward className="text-indigo-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


