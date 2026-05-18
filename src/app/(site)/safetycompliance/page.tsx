import CallToAction from "@/components/CallToAction";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SafeCompliance from "@/components/SafeCompliance";


import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Safety & Compliance | Uprise Cranes and Contractors",
  description: "This is for Safety & Compliance page",
};

const SafetyCompliance = () => {
  return (
    <>
      <Breadcrumb pageName="Safety & Compliance" />
      <SafeCompliance />
      <CallToAction />
    </>
  );
};

export default SafetyCompliance;
