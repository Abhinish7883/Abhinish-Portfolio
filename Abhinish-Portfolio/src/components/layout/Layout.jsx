import Navbar from './Navbar'
import Footer from './Footer'
import BackgroundBlobs from '../common/background-blobs/BackgroundBlobs'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <BackgroundBlobs />
      <div className="relative z-10">
        <Navbar />
        <main className="w-full min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

