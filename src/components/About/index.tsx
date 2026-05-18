import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../../components/Features/SingleFeature";
import featuresData from "../../components/Features/featuresData";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* LEFT CONTENT */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Lifting Standards. Getting It Done. Getting It Right.
                </h2>

                {/* Refactored paragraphs instead of <br /> */}
                <div className="space-y-6 text-base leading-relaxed dark:text-dark-6 mb-10">
                  <p>
                    At Uprise Cranes and Contractors, we&apos;re more than just labour hire—we&apos;re
                    <span className="font-bold"> your partner in smarter, safer lifting solutions. </span>
                    Specialising in <span className="font-bold">tower crane labour, precast installation, and
                    steel fabrication</span>, we provide <span className="font-bold">skilled riggers, dogmen, and
                    crane operators</span> to keep your commercial construction projects
                    running <span className="font-bold">efficiently and safely.</span>
                  </p>
                  <p>
                    With extensive experience across <span className="font-bold">Melbourne</span>, we
                    don&apos;t just supply workers—we <span className="font-bold">optimise crane operations,
                    enhance site safety, and find cost-effective solutions</span> to
                    support your project&apos;s success.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className="relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]"
                  >
                    <Image
                      src="/images/about/sample-1.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[500px]"
                  >
                    <Image
                      src="/images/about/sample.png"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <section className="pb-8 pt-10 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <SectionTitle
            subtitle=" "
            title="Here at Uprise Cranes and Contractors"
            paragraph="There are plenty of rigging companies out there, but Uprise Cranes and Contractors does things differently."
          />

          <div className="-mx-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4 justify-center">
            {featuresData.map((feature, index) => (
              <SingleFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
