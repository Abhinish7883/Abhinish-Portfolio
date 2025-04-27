import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link 
        to="/home"
        className="flex flex-col cursor-pointer"
        aria-label="Go to home page"
      >
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Abhinish Tiwari
        </h1>
      </Link>
    </div>
  )
}

export default Logo