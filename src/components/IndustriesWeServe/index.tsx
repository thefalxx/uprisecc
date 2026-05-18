import SectionTitle from "../Common/SectionTitle";
import IndustryFeature from "./IndustryFeature";
import industryData from "./IndustryData";

const Industries = () => {
  return (

        <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
          <SectionTitle
          subtitle=""
          title="Industries We Serve"
          paragraph="We specialize in commercial construction, providing tailored lifting solutions for:"
            center
          />

        <div className="-mx-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 justify-center">
          {industryData.map((feature, index) => (
            <IndustryFeature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
