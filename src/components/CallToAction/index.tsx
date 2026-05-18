import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[115px]">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-400" />

      {/* Subtle grid */}
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

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-[560px] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 rounded px-3.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Uprise Cranes & Contractors
          </div>

          <h2 className="mb-1.5 text-5xl font-bold uppercase tracking-tight text-slate-900 leading-none font-condensed">
            Need a Reliable Crew?
          </h2>
          <p className="mb-5 text-[44px] font-normal text-blue-600 leading-tight font-condensed">
            Let&apos;s Talk.
          </p>

          {/* Amber divider */}
          <div className="mx-auto mb-5 h-0.5 w-12 rounded bg-amber-400" />

          <p className="mx-auto mb-9 max-w-[460px] text-[15px] leading-relaxed text-slate-500">
            At Uprise Cranes and Contractors, we work as part of your team—ensuring every lift is efficient, cost-effective, and done right.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded px-7 py-3.5 text-[15px] font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors font-condensed"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded border border-slate-300 px-6 py-3.5 text-[15px] font-semibold uppercase tracking-wider text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors font-condensed"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;