import ThemeToggle from './ThemeToggle'

const navItems = [
  { title: 'Home', href: '#home', id: 'home' },
  { title: 'About', href: '#about', id: 'about' },
  { title: 'Projects', href: '#projects', id: 'projects' },
  { title: 'Skills', href: '#skills', id: 'skills' },
  { title: 'Contact', href: '#contact', id: 'contact' }
]

const DesktopNav = ({ activeTab, handleNavClick }) => {
  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleNavClick(id)
    }
  }

  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-2" role="menubar">
        {navItems.map((item) => (
          <NavLink 
            key={item.title}
            item={item}
            activeTab={activeTab}
            handleNavClick={handleNavClick}
            handleKeyPress={handleKeyPress}
          />
        ))}
        <ThemeToggle />
        <ResumeButton />
      </div>
    </div>
  )
}

const NavLink = ({ item, activeTab, handleNavClick, handleKeyPress }) => {
  return (
    <a
      href={item.href}
      role="menuitem"
      aria-current={activeTab === item.id ? 'page' : undefined}
      tabIndex={0}
      onKeyPress={(e) => handleKeyPress(e, item.id)}
      onClick={() => handleNavClick(item.id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium relative group
        ${activeTab === item.id 
          ? 'text-gray-900' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
        } transition-all duration-200`}
    >
      {item.title}
      <span 
        aria-hidden="true"
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform transition-transform duration-200
          ${activeTab === item.id 
            ? 'scale-x-100' 
            : 'scale-x-0 group-hover:scale-x-100'
          }`} 
      />
    </a>
  )
}

const ResumeButton = () => {
  return (
    <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg
                     hover:bg-indigo-700 transition-colors duration-200
                     shadow-md hover:shadow-lg cursor-pointer">
      Resume
    </button>
  )
}

export default DesktopNav
