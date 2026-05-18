import { Feature } from "@/types/feature";
import Link from "next/link";

const WorkerFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (

    <div className="wow fadeInUp group flex flex-col h-full items-center text-center p-6 bg-white dark:bg-dark rounded-xl shadow" data-wow-delay=".15s">

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

export default WorkerFeature;
