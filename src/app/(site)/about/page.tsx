import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import ChooseUs from "@/components/ChooseUs";
import Mission from "@/components/Mission";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Uprise Cranes and Contractors",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us" />
      <About />
      <Mission />
      <ChooseUs />
      <CallToAction />
    </main>
  );
};

export default AboutPage;
