import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const FCPage = () => {
  return (
    <>

    <section
      id="about"
      className="pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* LEFT CONTENT */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Why Hire Uprise Cranes and Contractors?
                </h2>

                {/* Refactored paragraphs instead of <br /> */}
                <div className="space-y-6 text-base leading-relaxed text-body-color dark:text-dark-6 mb-10">
                  <p>
                    At Uprise Cranes and Contractors, we&apos;re not just a labour hire company—we&apos;re your trusted partner in lifting operations.
                  </p>

                  <p>Whether you&apos;re running a large-scale commercial construction project or need a skilled crew for a short-term job, we provide experienced, safety-focused, and reliable crane crews to keep your project moving safely, efficiently, and on budget</p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]"
              >
                <Image
                  src="/images/uprise images/crane-sunset-1.jpg"
                  alt="about image"
                  fill
                  className="h-full w-full object-cover object-center"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FCPage;
