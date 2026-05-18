import SectionTitle from "../Common/SectionTitle";
import workforceData from "./workforceData";
import WorkforceFeature from "./WorkforceFeature";

const Workforce = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        {/* Section title */}
        <SectionTitle
          subtitle="Workforce"
          title="Skilled & Reliable Workforce"
          paragraph="We don't just send workers—we send highly skilled, experienced professionals who are ready to perform at the highest level."
          center
        />

        {/* Feature cards grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {workforceData.map((feature, index) => (
            <WorkforceFeature key={index} feature={feature} />
          ))}
        </div>

        <div className="pt-16">
          When you hire Uprise Cranes and Contractors, you&apos;re getting a crew that integrates into your team and brings valuable expertise to the job.
        </div>
      </div>
      
    </section>
  );
};

export default Workforce;
