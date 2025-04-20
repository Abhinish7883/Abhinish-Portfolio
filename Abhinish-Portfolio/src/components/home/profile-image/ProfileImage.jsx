import profileImage from '../../../../public/logo.jpg';

const ProfileImage = () => {
  return (
    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden
                       border-4 border-white dark:border-gray-800 shadow-xl">
          <img
            src={profileImage}
            alt="Abhinish Tiwari"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Enhanced gradient effect */}
        <div className="absolute -z-10 -inset-4 blur-3xl opacity-20 
                       bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600" />
        
        {/* Optional: Add a decorative ring */}
        <div className="absolute -inset-2 rounded-full border-2 border-indigo-600/20 dark:border-indigo-400/20" />
      </div>
    </div>
  )
}

export default ProfileImage



