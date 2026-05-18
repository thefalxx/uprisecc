import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Our Expertise"
          title="Uprise Cranes and Contractors"
          paragraph="At Uprise Cranes and Contractors, we go beyond labour hire—offering expert riggers, dogmen, and crane operators for safe, efficient tower crane, precast, and steel work on commercial sites."
        />
        <div className="-mx-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4 justify-center">
          {featuresData.map((feature, index) => (
            <SingleFeature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
