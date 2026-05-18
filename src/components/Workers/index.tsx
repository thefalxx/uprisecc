import SectionTitle from "../Common/SectionTitle";
import WorkerFaq from "./WorkerFaq";

const WorkerPage = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-gray-50 pb-16 pt-20 dark:bg-dark lg:pb-[80px] lg:pt-[120px]">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          subtitle="Join Our Crew!"
          title="Why Work with Uprise Cranes and Contractors?"
          paragraph="Looking for a crew that values your skills, prioritises safety, and keeps you working on top projects? At Uprise Cranes and Contractors, we&apos;re always on the lookout for experienced, reliable, and safety-focused professionals to join our team. Whether you&apos;re a seasoned rigger or an up-and-coming crane operator, we provide steady work, great pay, and a strong team culture. We know that our crew is the backbone of our success, which is why we make sure you&apos;re looked after."
          width="900px"
          center
        />

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <WorkerFaq
            question="Competitive Pay"
            answer="We pay fairly for your skills, experience, and hard work."
          />
          <WorkerFaq
            question="Ongoing Projects"
            answer="We keep you on the move with consistent work on commercial construction sites."
          />
          <WorkerFaq
            question="Safety-First Culture"
            answer="Your safety is our priority—we ensure the right training, equipment, and site conditions to keep you safe."
          />
          <WorkerFaq
            question="Team You Can Rely On"
            answer="We&apos;re not just a labour hire company—we back our crew, support our people, and do the right thing by you."
          />
        </div>

        {/* Closing Line */}
        <div className="mt-12 text-center text-body-color dark:text-white">
          When you work with Uprise Cranes and Contractors, you&apos;re part of a team that values your expertise and looks out for your future.
        </div>
      </div>
    </section>
  );
};

export default WorkerPage;
