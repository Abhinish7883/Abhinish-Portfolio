import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      longDescription: "This comprehensive e-commerce solution provides a seamless shopping experience with features including user authentication, product catalog management, shopping cart functionality, secure payment processing via Stripe, order management, and an admin dashboard for inventory control.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      liveLink: "https://your-project-url.com",
      githubLink: "https://github.com/yourusername/project",
      features: [
        "User authentication and authorization",
        "Product search and filtering",
        "Shopping cart management",
        "Secure payment processing",
        "Admin dashboard",
        "Order tracking"
      ],
      featured: true
    },
    // ... other projects
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={projectVariants}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                 hover:shadow-2xl transition-all duration-300 flex flex-col group"
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       flex items-center justify-center">
          <button
            onClick={() => setSelectedProject(project)}
            className="px-6 py-2 bg-white text-gray-900 rounded-lg transform -translate-y-4 
                       opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
                       transition-all duration-300 flex items-center gap-2"
          >
            View Details <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 
                       text-indigo-600 dark:text-indigo-400 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 
                           text-gray-600 dark:text-gray-400 rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                     bg-gray-900 dark:bg-gray-700 text-white rounded-lg
                     hover:bg-gray-800 dark:hover:bg-gray-600 
                     transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                     bg-indigo-600 text-white rounded-lg
                     hover:bg-indigo-700 
                     transition-colors duration-300"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project }) => (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 
                   dark:text-gray-400 dark:hover:text-gray-200"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="p-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.longDescription}
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 
                         text-indigo-600 dark:text-indigo-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 
                       bg-gray-900 dark:bg-gray-700 text-white rounded-lg
                       hover:bg-gray-800 dark:hover:bg-gray-600 
                       transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 
                       bg-indigo-600 text-white rounded-lg
                       hover:bg-indigo-700 
                       transition-colors duration-300"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Visit Live Site</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && <ProjectModal project={selectedProject} />}
        </AnimatePresence>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r 
                     from-indigo-600 to-violet-600 text-white rounded-lg
                     transform hover:translate-y-[-2px] hover:shadow-xl
                     transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

