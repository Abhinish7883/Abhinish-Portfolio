const Logo = ({ handleNavClick }) => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <a 
        href="#home"
        aria-label="Go to home section"
        className="flex flex-col cursor-pointer" 
        onClick={() => handleNavClick('home')}
      >
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Abhinish Tiwari
        </h1>
      </a>
    </div>
  )
}

export default Logo