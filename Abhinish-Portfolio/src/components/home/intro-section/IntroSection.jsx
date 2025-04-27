import ActionsButtons from "../action-buttons/ActionButtons";

export default function IntroSection() {
  return (
    <div>
      <span
        className="inline-block px-4 py-2 mb-6 text-sm font-medium text-indigo-600 dark:text-indigo-400 
                       bg-indigo-50 dark:bg-indigo-900/10 rounded-full w-fit
                       transform hover:scale-105 transition-all duration-300"
      >
        Welcome to my portfolio
      </span>

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
        Full Stack Developer & Software Engineer
      </p>

      <p
        className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl
                            animate-slideUp animation-delay-400
                            leading-relaxed"
      >
       I create high-impact, scalable web applications that drive results. From front-end finesse to back-end power, I turn complex challenges into exceptional digital experiences.
      </p>
      <ActionsButtons />
    </div>
  );
}
