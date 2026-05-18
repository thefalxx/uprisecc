import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import SkilledCrewAction from "@/components/SkilledCrew";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Page | Uprise Cranes and Contractors",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />
      <Contact />
    </>
  );
};

export default ContactPage;
