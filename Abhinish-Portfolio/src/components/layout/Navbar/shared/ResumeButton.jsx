import { FaDownload } from "react-icons/fa";
import { RESUME_CONFIG } from "../../../../constants/resume";

const ResumeButton = ({ variant = "default" }) => {
  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = RESUME_CONFIG.filePath;
      link.download = RESUME_CONFIG.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  const variants = {
    default:
      "flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    mobile:
      "w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 text-base font-medium",
  };

  return (
    <button
      onClick={handleDownload}
      className={variants[variant]}
      aria-label="Download Resume"
    >
      <FaDownload className={variant === "mobile" ? "w-5 h-5" : "w-4 h-4"} />
      <span>Resume</span>
    </button>
  );
};

export default ResumeButton;
