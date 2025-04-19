import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaAward, FaGithub, FaLinkedin, FaGraduationCap, FaDownload, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Led development of multiple web applications, improving performance and user experience."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      description: "Developed and maintained various web applications using modern technologies."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Your University Name",
      period: "2015 - 2018",
      description: "Specialized in Software Engineering and Web Technologies"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Your College Name",
      period: "2012 - 2015",
      description: "Foundation in Computer Science and Programming"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Cover Image */}
              <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              
              {/* Profile Content */}
              <div className="px-6 pb-6">
                {/* Profile Image */}
                <div className="relative -mt-16 mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                    <img
                      src="../../public/logo.jpg"
                      alt="Abhinish Tiwari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Abhinish Tiwari
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                    Full Stack Developer
                  </p>
                  
                  {/* Location & Contact */}
                  <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-indigo-500" />
                      <span>Your Location</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEnvelope className="text-indigo-500" />
                      <span>abhinish990@gmail.com</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <div className="text-2xl font-bold text-indigo-500">5+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <div className="text-2xl font-bold text-indigo-500">20+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://github.com/yourusername" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Download CV Button */}
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 
                                   text-white rounded-lg flex items-center justify-center gap-2
                                   hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    <FaDownload />
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience and Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaBriefcase className="text-indigo-500" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 last:pb-0">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-500"></div>
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-indigo-500 dark:text-indigo-400">{exp.company} • {exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-indigo-500" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-6 last:pb-0">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-500"></div>
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-indigo-500 dark:text-indigo-400">{edu.institution} • {edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
