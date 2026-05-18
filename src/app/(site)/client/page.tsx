import CallToAction from "@/components/CallToAction";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Clients from "@/components/Clients";
import { Metadata } from "next";
import FCPage from "@/components/ForClientsPage";
import SafetyPage from "@/components/Safety";
import Workforce from "@/components/Workforce";
import FlexibleSolutions from "@/components/FlexibleSolutions";

export const metadata: Metadata = {
  title:
    "For Clients| Uprise Cranes and Contractors",
  description: "This is for clients page",
};

const ClientPage = () => {
  return (
    <>
      <Breadcrumb pageName="For Clients" />
      <FCPage />
      <SafetyPage />
      <Workforce />
      <FlexibleSolutions />
      <CallToAction />
      {/* <Clients /> */}
    </>
  );
};

export default ClientPage;