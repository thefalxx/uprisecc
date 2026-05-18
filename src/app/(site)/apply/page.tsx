import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import HTApply from "@/components/HowToApply";

export const metadata: Metadata = {
  title:
    "For Workers | Uprise Cranes and Contractors",
  description: "This is for workers application page",
};

const HowToApply = () => {
  return (
    <>
      <Breadcrumb pageName="How To Apply" />
      <HTApply />

    </>
  );
};

export default HowToApply;