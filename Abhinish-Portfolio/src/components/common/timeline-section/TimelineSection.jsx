function TimelineSection({ timeline }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <timeline.icon className="text-indigo-500" />
        {timeline?.title }
      </h3>
      <div className="space-y-6">
        {timeline?.options?.map((option, index) => (
          <div key={index} className="relative pl-8 pb-6 last:pb-0">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-500"></div>
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {option.title}
            </h4>
            <p className="text-indigo-500 dark:text-indigo-400">
              {option.subTitle} • {option.period}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineSection;
