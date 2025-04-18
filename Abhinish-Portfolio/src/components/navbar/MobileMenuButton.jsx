const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <button
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden inline-flex items-center justify-center p-2 rounded-lg
                 text-gray-600 hover:text-gray-900 hover:bg-gray-100
                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
                 transition-colors duration-200"
    >
      <span className="sr-only">Open main menu</span>
      {!isMenuOpen ? (
        <MenuIcon />
      ) : (
        <CloseIcon />
      )}
    </button>
  )
}

const MenuIcon = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

export default MobileMenuButton