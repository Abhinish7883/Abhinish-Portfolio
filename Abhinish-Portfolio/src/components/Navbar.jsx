import { useState, useEffect } from 'react'
import Logo from './navbar/Logo'
import DesktopNav from './navbar/DesktopNav'
import MobileNav from './navbar/MobileNav'
import MobileMenuButton from './navbar/MobileMenuButton'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active tab based on scroll position
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const id = section.getAttribute('id')
          setActiveTab(id)
          // Update URL hash without triggering scroll
          window.history.replaceState(null, null, `#${id}`)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setActiveTab(id)
    setIsMenuOpen(false)
  }

  return (
    <nav 
      role="navigation"
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo handleNavClick={handleNavClick} />
          <DesktopNav activeTab={activeTab} handleNavClick={handleNavClick} />
          <MobileMenuButton 
            isMenuOpen={isMenuOpen} 
            setIsMenuOpen={setIsMenuOpen} 
          />
        </div>
      </div>

      <MobileNav 
        isMenuOpen={isMenuOpen} 
        activeTab={activeTab} 
        handleNavClick={handleNavClick} 
      />
    </nav>
  )
}

export default Navbar


