import Breadcrumb from "@/components/Common/Breadcrumb";
import HireWorker from "@/components/HireWorker";
import RequirementsPage from "@/components/Requirements";
import WorkerPage from "@/components/Workers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "For Workers | Uprise Cranes and Contractors",
  description: "This is for workers page",
};

const Workers = () => {
  return (
    <>
      <Breadcrumb pageName="For Workers" />
      <WorkerPage />
      <HireWorker />
      <RequirementsPage />
    </>
  );
};

export default Workers;
