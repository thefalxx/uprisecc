import Breadcrumb from "@/components/Common/Breadcrumb";
import Privacy from "@/components/Privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Uprise Cranes and Contractors",
  description: "This is About page description",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Privacy Policy" />

      <Privacy />
    </main>
  );
};

export default AboutPage;
