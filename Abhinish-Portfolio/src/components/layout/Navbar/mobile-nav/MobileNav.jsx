import { motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import ResumeButton from '../shared/ResumeButton'

const MobileNav = ({ isOpen, setIsOpen }) => {
  const location = useLocation()
  
  const navItems = [
    { title: 'Home', to: '/home' },
    { title: 'About', to: '/about' },
    { title: 'Projects', to: '/projects' },
    { title: 'Skills', to: '/skills' },
    { title: 'Contact', to: '/contact' }
  ]

  const menuVariants = {
    open: { 
      height: 'auto', 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    closed: { 
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="md:hidden overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `
              block px-3 py-2 rounded-lg text-base font-medium
              transition-all duration-200 relative group
              ${isActive 
                ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }
            `}
          >
            {item.title}
            <span 
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform origin-left transition-transform duration-200
                ${location.pathname === item.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
              `}
            />
          </NavLink>
        ))}
        <div className="px-3 py-2">
          <ResumeButton variant="mobile" />
        </div>
      </div>
    </motion.div>
  )
}

export default MobileNav

