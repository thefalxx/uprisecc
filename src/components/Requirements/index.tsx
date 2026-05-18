import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const RequirementsPage = () => {
  const steps = [
    { num: 1, label: "Enter Your Name, Email & Phone Number" },
    { num: 2, label: "Select Your License Type & Qualifications" },
    { num: 3, label: "Upload A Brief Summary of Your Work Experience" },
    { num: 4, label: "Upload Your Resume" },
  ];

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-400" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Corner marks */}
      <span className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 border-blue-600 opacity-15" />
      <span className="absolute top-4 right-4 w-9 h-9 border-t-2 border-r-2 border-blue-600 opacity-15" />
      <span className="absolute bottom-4 left-4 w-9 h-9 border-b-2 border-l-2 border-blue-600 opacity-15" />
      <span className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 border-blue-600 opacity-15" />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5 rounded px-3.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Application
          </div>

          <p className="mb-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
            Uprise Cranes & Contractors
          </p>

          <h2 className="mb-4 text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-none font-condensed">
            How To Apply
          </h2>

          <div className="mx-auto mb-4 h-0.5 w-12 rounded bg-amber-400" />

          <p className="mx-auto text-[15px] leading-relaxed text-slate-500 max-w-md">
            Applying is quick and easy—just follow these steps:
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 mb-20">
          {/* Steps */}
          <div className="relative flex flex-col md:flex-row items-start md:justify-between">
            {/* Connector line */}
            <div className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-blue-200" />

            {steps.map(({ num, label }) => (
              <div
                key={num}
                className="flex flex-col items-center z-10 w-full md:w-1/4 mb-10 md:mb-0 px-2"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold font-condensed text-base ring-4 ring-blue-50 ring-offset-1 ring-offset-blue-200">
                  {num}
                </div>
                <p className="mt-4 text-center text-xs font-semibold tracking-widest uppercase text-blue-600 font-condensed mb-1">
                  Step {num}
                </p>
                <p className="text-center text-sm text-slate-500 leading-relaxed">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Encouraging paragraph */}
          <p className="mt-12 text-center text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
            Ready to take your career to new heights? Join a crew that values safety, teamwork,
            and growth. Apply today and be part of Uprise Cranes and Contractors&apos;s success story!
          </p>

          {/* Button */}
          <div className="flex justify-center mt-7">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded px-8 py-3.5 text-[15px] font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors font-condensed"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPage;