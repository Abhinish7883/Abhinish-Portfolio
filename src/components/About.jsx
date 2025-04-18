import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaAward, FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

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
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 mb-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Abhinish Tiwari
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                  Full Stack Developer
                </p>

                <div className="flex justify-center space-x-4 mb-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                     className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <FaCode className="text-indigo-500" />
                    <span className="text-gray-600 dark:text-gray-300">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaAward className="text-indigo-500" />
                    <span className="text-gray-600 dark:text-gray-300">20+ Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Biography</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate Full Stack Developer with expertise in building modern web applications.
                I specialize in creating responsive, user-friendly interfaces and robust backend systems.
                With a strong foundation in both frontend and backend technologies, I bring ideas to life
                through clean, efficient code.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaBriefcase className="text-indigo-500" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-indigo-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-indigo-500 dark:text-indigo-400">{exp.company} • {exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-indigo-500" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-indigo-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-indigo-500 dark:text-indigo-400">{edu.institution} • {edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


