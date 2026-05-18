import { Feature } from "@/types/feature";
import Link from "next/link";

const FSFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="wow fadeInUp group flex flex-col h-full items-center text-center p-6 bg-white dark:bg-dark rounded-xl shadow" data-wow-delay=".15s">
      {/* Icon */}
      <div className="relative z-10 mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
        <span className="absolute left-0 top-0 z-[-1] h-[70px] w-[70px] rotate-[25deg] rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">{title}</h3>

      {/* Paragraph */}
      <p className="mb-4 text-body-color dark:text-dark-6 max-w-[220px] min-h-[48px]">
        {paragraph}
      </p>

      {/* Spacer to push button down if needed */}
      <div className="flex-grow" />

      {/*   Button */}
      <Link
        href={btnLink}
        className="mt-auto text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
      >
        {btn}
      </Link>
    </div>

    
  );
};

export default FSFeature;
