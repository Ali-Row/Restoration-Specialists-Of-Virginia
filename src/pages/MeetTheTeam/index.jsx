import "./style.css";
import TeamMemberCard from "../../components/TeamMemberCard";
import teamImg from "./TeamImages/team.jpeg";
import justinLancasterImg from "./TeamImages/justin-lancaster.png";
import jasonAfsharieImg from "./TeamImages/jason-afsharie.png";
import dakotaStanleyImg from "./TeamImages/dakota-stanley.png";
import alistairRowdenImg from "./TeamImages/alistair-rowden.png";

const MeetTheTeam = () => {
  const team = [
    {
      img: justinLancasterImg,
      name: "Justin Lancaster",
      role: "President",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum ea eaque excepturi, quo quas libero porro cumque? Quae recusandae obcaecati dolor rem aliquam beatae dolorem delectus exercitationem sapiente quidem.",
    },
    {
      img: jasonAfsharieImg,
      name: "Jason Afsharie",
      role: "President/Restoration Specialist",
      desc: "Lorem, ipsum dolor obcaecati dolor rem aliquam beatae dolorem delectus obcaecati dolor rem aliquam beatae dolorem delectus",
    },
    {
      img: dakotaStanleyImg,
      name: "Dakota Stanley",
      role: "Restoration Specialist",
      desc: "Lorem, ipsum dolor obcaecati dolor rem aliquam beatae dolorem delectus obcaecati dolor rem aliquam beatae dolorem delectus",
    },
    {
      img: alistairRowdenImg,
      name: "Alistair Rowden",
      role: "Software Developer",
      desc: "Lorem, ipsum dolor obcaecati dolor rem aliquam beatae dolorem delectus obcaecati dolor rem aliquam beatae dolorem delectus",
    },
  ];

  return (
    <main>
      <div className="meet-the-team-hero">
        <h1>Meet The Team</h1>
        <img className="team-img-banner" src={teamImg} alt="The RSVA team" />
      </div>
      <section className="card-wrapper pb-5">
        <div className="container">
          <div className="row">
            {team.map(({ img, name, role, desc }) => {
              return (
                <div className="col-md-4">
                  <TeamMemberCard
                    img={img}
                    name={name}
                    role={role}
                    desc={desc}
                    alt={name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MeetTheTeam;
