import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Jade Stafford",
    designation: "Office Manager",
    // image: "/images/team/sample-4.jpg",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
  },
  {
    id: 2,
    name: "Matthew Stafford",
    designation: "Managing Director",
    // image: "/images/team/sample-3.jpg",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
  },
  {
    id: 3,
    name: "Luke Strahan",
    designation: "Construction Manager",
    // image: "/images/team/sample-2.jpg",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Meet the crew behind Uprise Cranes and Contractors—skilled, experienced, and built for the toughest jobs. We don&apos;t just show up—we lift standards."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
