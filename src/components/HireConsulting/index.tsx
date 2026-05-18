"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const steps = [
  {
    question: "Review Project Plans",
    answer: "To determine the best crane setup and crew requirements.",
  },
  {
    question: "Identify Site Risks and Inefficiencies",
    answer: "To prevent costly delays.",
  },
  {
    question: "Recommend the Right Crane for Your Site",
    answer: "To ensure optimal performance.",
  },
  {
    question: "A Crew You Can Rely On",
    answer:
      "We only send out highly skilled, professional, and experienced crane crew members who know their trade.",
  },
  {
    question: "Provide Ongoing Workforce Support",
    answer: "For long-term commercial construction projects.",
  },
];

const HireConsulting = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white dark:bg-dark py-20">
      <div className="container">
        <SectionTitle
          subtitle="Short Term / Long Term Hire & Consulting"
          title="Project Support & Site Optimisation"
          paragraph="We go beyond labour hire—we help optimise your site for better safety, efficiency, and cost savings. Our team works with you to:"
          width="700px"
          center
        />

        {/* Timeline Steps */}
        <div className="relative mt-16 lg:mt-24 max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[3px] bg-primary" />

          <ul className="space-y-14">
            {steps.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex gap-6"
              >
                {/* Icon Circle with SVG */}
                <div className="flex-shrink-0 mt-1">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg"
                  >
                    {/* Inline SVG Checkmark */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-lg font-medium text-gray-700 dark:text-gray-200"
        >
          By partnering with{" "}
          <span className="text-primary font-semibold">Uprise Cranes and Contractors</span>,
          you get more than just a crew—you get a team that helps your project
          succeed.
        </motion.p>
      </div>
    </section>
  );
};

export default HireConsulting;
