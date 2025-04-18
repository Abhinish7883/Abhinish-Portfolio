import ThemeToggle from './ThemeToggle'

const navItems = [
  { title: 'Home', href: '#home', id: 'home' },
  { title: 'About', href: '#about', id: 'about' },
  { title: 'Projects', href: '#projects', id: 'projects' },
  { title: 'Skills', href: '#skills', id: 'skills' },
  { title: 'Contact', href: '#contact', id: 'contact' }
]

const MobileNav = ({ isMenuOpen, activeTab, handleNavClick }) => {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!isMenuOpen}
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        {navItems.map((item) => (
          <MobileNavLink 
            key={item.title}
            item={item}
            activeTab={activeTab}
            handleNavClick={handleNavClick}
          />
        ))}
        <div className="px-3 py-2 flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Theme</span>
          <ThemeToggle />
        </div>
        <MobileResumeButton />
      </div>
    </div>
  )
}

const MobileNavLink = ({ item, activeTab, handleNavClick }) => {
  return (
    <a
      href={item.href}
      onClick={() => handleNavClick(item.id)}
      className={`block px-3 py-2 rounded-lg text-base font-medium
                 transition-colors duration-200 relative
                 ${activeTab === item.id
                   ? 'text-gray-900 bg-gray-100/80'
                   : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                 }`}
    >
      {item.title}
      {activeTab === item.id && (
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-lg" />
      )}
    </a>
  )
}

const MobileResumeButton = () => {
  return (
    <button className="w-full mt-2 px-3 py-2 bg-indigo-600 text-white
                     rounded-lg hover:bg-indigo-700 transition-colors
                     duration-200 shadow-md hover:shadow-lg">
      Resume
    </button>
  )
}

export default MobileNav
