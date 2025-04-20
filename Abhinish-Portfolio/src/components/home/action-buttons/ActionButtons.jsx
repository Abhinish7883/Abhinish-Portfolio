import { RedirectButton } from "../../common/buttons/Button";

export default function ActionsButtons() {
  return (
    <div className="flex flex-wrap gap-4 animate-slideUp animation-delay-600">
      <RedirectButton
        redirectTo="/projects"
        ariaLabel="Go to home projects page"
        btnClass="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg
                    transform hover:translate-y-[-2px] hover:shadow-xl                 
                    transition-all duration-300 relative overflow-hidden"
      >
        <span className="relative z-10">View Projects</span>
        <div
          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </RedirectButton>
      <RedirectButton
        redirectTo="/contact"
        ariaLabel="Go to home contact page"
        btnClass="group px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg
                    hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                    transform hover:translate-y-[-2px] hover:shadow-lg
                    transition-all duration-300 relative"
      >
        <span
          className="relative z-10 group-hover:text-indigo-700 dark:group-hover:text-indigo-400
                        transition-colors duration-300"
        >
          Contact Me
        </span>
      </RedirectButton>
    </div>
  );
}
