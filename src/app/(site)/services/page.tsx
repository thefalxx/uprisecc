import Breadcrumb from "@/components/Common/Breadcrumb";
import HireACrew from "@/components/HireACrew";
import HireConsulting from "@/components/HireConsulting";
import Industries from "@/components/IndustriesWeServe";
import SkilledCrewAction from "@/components/SkilledCrew";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services | Uprise Cranes and Contractors",
  description: "This is hire a crew page",
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb pageName="Services" />

      <HireACrew />
      <HireConsulting />
      <Industries />
      <SkilledCrewAction />

    </>
  );
};

export default ServicePage;
