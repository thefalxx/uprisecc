import SectionTitle from "../Common/SectionTitle";
import fsData from "./fsData";
import FSFeature from "./FSFeature";

const FlexibleSolutions = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        {/* Section title */}
        <SectionTitle
          subtitle="Solutions"
          title="Flexible Labour Solutions"
          paragraph="We know that every project is different, and that&apos;s why we offer customised labour solutions to suit your specific needs."
          center
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {fsData.map((feature, index) => (
            <FSFeature key={index} feature={feature} />
          ))}
        </div>


        <div className="pt-16">
          Whether you need one operator or a full crane crew, Uprise Cranes and Contractors delivers the right people, at the right time, with the right expertise.
        </div>
      </div>
      
    </section>
  );
};

export default FlexibleSolutions;
