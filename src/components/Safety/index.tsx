import SectionTitle from "../Common/SectionTitle";

const SafetyPage = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-gray-50 dark:bg-dark pb-16 pt-20 lg:pb-[80px] lg:pt-[120px]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <SectionTitle
          subtitle="Safety First"
          title="Our Safety Standards"
          paragraph="At Uprise Cranes and Contractors, safety is the foundation of everything we do. We go beyond compliance—ensuring every project is carried out with the highest level of care and precaution."
          width="720px"
          center
        />

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Fully Compliant</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We strictly follow WorkSafe regulations, site requirements, and all industry standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5l-9-5l-9 5l9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14v7m0-7l-9-5m9 5l9-5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Ongoing Training</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Our teams continuously train on the latest safety protocols and equipment use.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Risk Assessments</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We proactively identify hazards and provide solutions to minimize risks on-site.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className=" text-body-color">
            Safety isn&apos;t just part of the job—it&apos;s our promise to every client, partner, and worker. Your safety—and the success of your project—is our responsibility, and we take it seriously.

          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Talk to Us About Safety
          </a>
        </div>
      </div>
    </section>
  );
};

export default SafetyPage;

