import { NavLink, useLocation } from 'react-router-dom'
import ResumeButton from '../shared/ResumeButton'

const navItems = [
  { title: 'Home', to: '/home' },
  { title: 'About', to: '/about' },
  { title: 'Projects', to: '/projects' },
  { title: 'Skills', to: '/skills' },
  { title: 'Contact', to: '/contact' }
]

const DesktopNav = () => {
  const location = useLocation()

  return (
    <div className="hidden md:flex items-center space-x-8">
      <div className="flex items-center space-x-4" role="menubar">
        {navItems.map((item) => (
          <NavLink 
            key={item.title}
            to={item.to}
            className={({ isActive }) => `
              relative px-4 py-2 text-sm font-medium rounded-lg
              transition-all duration-200 group
              ${isActive 
                ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/80'
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
      </div>
      <ResumeButton />
    </div>
  )
}

export default DesktopNav



