// import SectionTitle from "../Common/SectionTitle";
// import SingleFaq from "./MV";

// const Mission = () => {
//   return (
//     <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
//       <div className="container">
//         <SectionTitle
//           subtitle="Our Vision."
//           title="Mission and Values"
//           paragraph="At Uprise Cranes and Contractors, we believe in doing things the right way—for our clients, 
//           our crew, and the success of every project. Our mission is simple:"
//           width="640px"
//           center
//         />

//         <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20 justify-center items-center">
//           <div className="w-full px-4 lg:w-1/2">
//             <SingleFaq
//               question="Safety First"
//               answer="The safety of our crew and your site is non-negotiable. We follow strict industry standards and always look for ways to minimise risk."
//             />
//             <SingleFaq
//               question="Reliability You Can Count On"
//               answer="We show up, work hard, and get the job done—every time. You can trust us to deliver."
//             />
//             <SingleFaq
//               question="Teamwork & Mateship"
//               answer="We&apos;re not just hired hands; we integrate into your team, working alongside you to keep your project moving smoothly."
//             />
//             <SingleFaq
//               question="Efficiency & Smart Solutions "
//               answer="We don&apos;t just follow orders—we assess, advise, and help you make better decisions about crane placement, equipment hire, and site setup."
//             />
//             <SingleFaq
//               question="Looking After Our Own"
//               answer="We believe a well-supported crew is a strong crew. That&apos;s why we take care of our team, ensuring they have the right training, equipment, and conditions to perform at their best."
//             />
//           </div>

//           </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;

"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const values = [
  {
    title: "Safety First",
    description:
      "The safety of our crew and your site is non-negotiable. We follow strict industry standards and always look for ways to minimise risk.",
  },
  {
    title: "Reliability You Can Count On",
    description:
      "We show up, work hard, and get the job done—every time. You can trust us to deliver.",
  },
  {
    title: "Teamwork & Mateship",
    description:
      "We’re not just hired hands; we integrate into your team, working alongside you to keep your project moving smoothly.",
  },
  {
    title: "Efficiency & Smart Solutions",
    description:
      "We don’t just follow orders—we assess, advise, and help you make better decisions about crane placement, equipment hire, and site setup.",
  },
  {
    title: "Looking After Our Own",
    description:
      "We believe a well-supported crew is a strong crew. That’s why we take care of our team, ensuring they have the right training, equipment, and conditions to perform at their best.",
  },
];

const Mission = () => {
  return (
    <section className="relative z-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900 py-20">
      <div className="container">
        <SectionTitle
          subtitle="Our Vision."
          title="Mission and Values"
          paragraph="At Uprise Cranes and Contractors, we believe in doing things the right way—for our clients, 
          our crew, and the success of every project. Our mission is simple:"
          width="640px"
          center
        />

        {/* Cards Layout */}
        <div className="mt-16 grid gap-8">
          {/* Top row: 3 cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.slice(0, 3).map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rounded-2xl bg-white dark:bg-dark p-8 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 stretched cards */}
          <div className="grid gap-8 sm:grid-cols-2">
            {values.slice(3, 5).map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rounded-2xl bg-white dark:bg-dark p-8 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
