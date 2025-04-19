import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { 
      category: "Frontend Development", 
      items: [
        { name: "React", progress: 90 },
        { name: "Next.js", progress: 85 },
        { name: "TypeScript", progress: 80 },
        { name: "Tailwind CSS", progress: 95 },
        { name: "JavaScript", progress: 90 },
        { name: "HTML/CSS", progress: 95 }
      ]
    },
    { 
      category: "Backend Development", 
      items: [
        { name: "Node.js", progress: 85 },
        { name: "Python", progress: 80 },
        { name: "Java", progress: 75 },
        { name: "SQL", progress: 85 },
        { name: "MongoDB", progress: 80 },
        { name: "Express.js", progress: 85 }
      ]
    },
    { 
      category: "Tools & Technologies", 
      items: [
        { name: "Git", progress: 90 },
        { name: "Docker", progress: 80 },
        { name: "AWS", progress: 75 },
        { name: "Firebase", progress: 85 },
        { name: "Redux", progress: 85 },
        { name: "REST APIs", progress: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <FaCode className="text-indigo-500" />
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-indigo-500 mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-indigo-500 font-semibold">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;