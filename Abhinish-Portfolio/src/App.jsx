import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import './App.css'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
                    dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Navbar />
      
      {/* Main content with padding for fixed navbar */}
      <main className="w-full">
        <Home />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Add your project cards here */}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen bg-white dark:bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Skills</h2>
            {/* Add your skills content here */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h2>
            {/* Add your contact form or information here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2024 Abhinish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App








