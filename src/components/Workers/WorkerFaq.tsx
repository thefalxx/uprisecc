const WorkerFaq = (props: { question: string; answer: string }) => {
  const { question, answer } = props;

  return (
    <div className="group flex flex-col rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-dark-2">
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-md">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white">
        {question}
      </h3>

      {/* Answer */}
      <p className="text-base text-body-color dark:text-dark-6">{answer}</p>
    </div>
  );
};

export default WorkerFaq;
