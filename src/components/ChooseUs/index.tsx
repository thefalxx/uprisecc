"use client";

import SectionTitle from "../Common/SectionTitle";

const values = [
  {
    title: "More Than Just Labour Hire",
    description:
      "We provide smarter solutions for crane operations, helping you optimise setup, reduce costs, and prevent site issues before they happen.",
  },
  {
    title: "Safety at Every Step",
    description:
      "We take safety seriously—for your team, our crew, and the entire worksite. We proactively assess risks and work to eliminate hazards before they become problems.",
  },
  {
    title: "Industry Experts in Commercial Construction",
    description:
      "We know this industry inside and out. Our crew has the skills, experience, and know-how to handle complex lifts and high-pressure environments.",
  },
  {
    title: "A Crew You Can Rely On",
    description:
      "We only send out highly skilled, professional, and experienced crane crew members who know their trade.",
  },
  {
    title: "We've Got Your Back",
    description:
      "When you work with Uprise Cranes and Contractors, you're not just hiring a service—you’re getting a dedicated partner who wants to see your project succeed.",
  },
];

const Mission = () => {
  return (
    <section className="relative z-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900 py-20">
      <div className="container">
        <SectionTitle
          subtitle="Our Advocacy"
          title="Why Choose Uprise Cranes and Contractors?"
          paragraph="There are plenty of rigging companies out there, but Uprise Cranes and Contractors does things differently."
          width="640px"
          center
        />

        {/* Timeline Style */}
        <div className="relative mt-16 lg:mt-20 max-w-3xl mx-auto">
          {/* Vertical line */}
          {/* Vertical line — centered on the 32px marker (left-0, w-8) */}
          <div className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/70 to-primary/20"></div>

          <ul className="space-y-12">
            {values.map((item, index) => (
              <li key={index} className="relative pl-14">
                {/* Marker */}
                <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold shadow-md">
                  {index + 1}
                </span>

                {/* Content */}
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
