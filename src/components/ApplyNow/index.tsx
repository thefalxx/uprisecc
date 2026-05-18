import Link from "next/link";

const ApplyNow = () => {
  return (
    <section className="rounded-2xl bg-white px-10 py-20 text-center">

      {/* Headline */}
      <h2 className="mx-auto mb-4 max-w-[540px] text-3xl font-bold leading-tight text-[#1a2a4a] md:text-[40px]">
        Be one of us — send us an application
      </h2>

      {/* Body */}
      <p className="mx-auto mb-9 max-w-[460px] text-[15px] leading-relaxed text-[#1a2a4a]">
        Ready to join a crew that has your back? At Uprise Cranes and
        Contractors, we&apos;ve built a tight-knit team that looks out for each
        other on and off the job.
      </p>

      {/* CTA */}
      <Link
        href="/apply"
        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"

      >
        Apply Now
      </Link>
    </section>
  );
};

export default ApplyNow;