export default function IntroSection() {
  return (
    <div>
      <h2
        className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase mb-4
                             transform hover:scale-105 transition-transform duration-300 inline-block"
      >
        Welcome to my portfolio
      </h2>

      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6
                             animate-slideUp"
      >
        Hi, I'm{" "}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600
                                animate-gradient bg-300% hover:animate-none hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500
                                transition-all duration-300"
        >
          Abhinish
        </span>
      </h1>

      <p
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8
                            animate-slideUp animation-delay-200"
      >
        Full Stack Developer crafting elegant web solutions
      </p>

      <p
        className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl
                            animate-slideUp animation-delay-400
                            leading-relaxed"
      >
        I specialize in building robust web applications using modern
        technologies. Let's turn your ideas into reality.
      </p>
    </div>
  );
};
