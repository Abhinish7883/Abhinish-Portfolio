const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative 
                                 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50
                                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                                 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-left md:pr-12 animate-fadeIn">
          <h2 className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase mb-4
                         transform hover:scale-105 transition-transform duration-300 inline-block">
            Welcome to my portfolio
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6
                         animate-slideUp">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600
                            animate-gradient bg-300% hover:animate-none hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500
                            transition-all duration-300">
              Abhinish
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8
                        animate-slideUp animation-delay-200">
            Full Stack Developer crafting elegant web solutions
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl
                        animate-slideUp animation-delay-400
                        leading-relaxed">
            I specialize in building robust web applications using modern technologies.
            Let's turn your ideas into reality.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slideUp animation-delay-600">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg
                        transform hover:translate-y-[-2px] hover:shadow-xl
                        transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg
                        hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                        transform hover:translate-y-[-2px] hover:shadow-lg
                        transition-all duration-300 relative"
            >
              <span className="relative z-10 group-hover:text-indigo-700 dark:group-hover:text-indigo-400
                              transition-colors duration-300">
                Contact Me
              </span>
            </button>
          </div>
          <SocialLinks />
        </div>

        {/* Right Content - Profile Image */}
        <ProfileImage />
      </div>

      <ScrollIndicator />
    </section>
  )
}

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
        </svg>
      ),
      hoverColor: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      hoverColor: 'hover:bg-[#0077B5]'
    },
    {
      name: 'Email',
      url: 'mailto:abhinish990@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      hoverColor: 'hover:bg-red-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      hoverColor: 'hover:bg-[#1DA1F2]'
    }
  ]

  return (
    <div className="mt-12 relative">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl font-bold relative inline-block
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
          Connect with me
        </h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-600/20 to-transparent 
                      dark:from-indigo-400/20"></div>
      </div>
      
      <div className="flex gap-4 justify-center sm:justify-start">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-lg transition-all duration-300 
                      transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg
                      ${link.hoverColor} hover:text-white
                      bg-white dark:bg-gray-800 
                      text-gray-600 dark:text-gray-300
                      shadow-md hover:shadow-indigo-500/20
                      group relative`}
            aria-label={link.name}
          >
            <div className="relative z-10">
              {link.icon}
            </div>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                           bg-gray-800 text-white px-3 py-1.5 rounded-md text-sm
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           whitespace-nowrap shadow-lg pointer-events-none">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

const ProfileImage = () => {
  return (
    <div className="flex-1 mt-12 md:mt-0 flex justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 blur-2xl"></div>
        <img
          src="../../public/logo.jpg"
          alt="Abhinish Tiwari"
          className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </div>
  )
}

const ScrollIndicator = () => {
  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="animate-bounce flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <svg 
          className="w-6 h-6 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
}

export default Home;






