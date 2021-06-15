import "./style.css";
import TeamMemberCard from "../../components/TeamMemberCard";
import teamImg from "./TeamImages/team.jpeg";
import justinLancasterImg from "./TeamImages/justin-lancaster.png";
import jasonAfsharieImg from "./TeamImages/jason-afsharie.png";
import dakotaStanleyImg from "./TeamImages/dakota-stanley.png";
import alistairRowdenImg from "./TeamImages/alistair-rowden.png";
import brandonMartinezImg from "./TeamImages/brandon-martinez.png";
import pamelaHanockImg from "./TeamImages/pamela-hanock.png";

import LazyLoadImage from "../../components/LazyLoadImage";
import loading from "./TeamImages/loading.gif";
import img1 from "./TeamImages/1.jpeg";
import img2 from "./TeamImages/2.jpeg";
import img3 from "./TeamImages/3.jpeg";
import img4 from "./TeamImages/4.jpeg";
import img5 from "./TeamImages/5.jpeg";
import img6 from "./TeamImages/6.jpeg";
import img7 from "./TeamImages/7.jpeg";
import img8 from "./TeamImages/8.jpeg";
import img9 from "./TeamImages/9.jpeg";
import img10 from "./TeamImages/10.jpeg";
import img11 from "./TeamImages/11.jpeg";
import img12 from "./TeamImages/12.jpeg";
import img13 from "./TeamImages/13.jpeg";
import img14 from "./TeamImages/14.jpeg";

const MeetTheTeam = () => {
  const team = [
    {
      img: justinLancasterImg,
      name: "Justin Lancaster",
      role: "President",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum ea eaque excepturi, quo quas libero porro cumque? Quae recusandae obcaecati dolor rem aliquam beatae",
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
    {
      img: brandonMartinezImg,
      name: "Brandon Martinez",
      role: "Restoration Specialist",
      desc: "Lorem, ipsum dolor obcaecati dolor rem aliquam beatae dolorem delectus obcaecati dolor rem aliquam beatae dolorem delectus",
    },
    {
      img: pamelaHanockImg,
      name: "Pamela Hanock",
      role: "Secretary",
      desc: "nde ratione iure dolorem officiis neque? Quia distinctio illo rem sit architecto hic iste nisi omnis voluptas nemo placeat quam, id consectetur.",
    },
  ];
  return (
    <main>
      <div className="meet-the-team-hero">
        <h1 className="animate__animated animate__fadeInDown animate__faster">Meet The Team At RSVA</h1>
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

      <section className="container p-0 home-imgs">
        <div className="row">
          <LazyLoadImage
            className="col-md-3 p-0"
            src={img1}
            placeholder={loading}
            alt="img"
          />
          <LazyLoadImage
            className="col-md-3 p-0"
            src={img2}
            placeholder={loading}
            alt="img"
          />
          <LazyLoadImage
            className="col-md-3 p-0"
            src={img3}
            placeholder={loading}
            alt="img"
          />
          <LazyLoadImage
            className="col-md-3 p-0"
            src={img4}
            placeholder={loading}
            alt="img"
          />
        </div>
        <div className="row">
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img5}
            placeholder={loading}
            alt="img"
          />
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img6}
            placeholder={loading}
            alt="img"
          />
        </div>
        <div className="row">
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img7}
            placeholder={loading}
            alt="img"
          />
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img8}
            placeholder={loading}
            alt="img"
          />
        </div>
        <div className="row">
          <LazyLoadImage
            className="col-md-12 p-0"
            src={img9}
            placeholder={loading}
            alt="img"
          />
        </div>
        <div className="row">
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img10}
            placeholder={loading}
            alt="img"
          />
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img11}
            placeholder={loading}
            alt="img"
          />
        </div>
        <div className="row">
          <LazyLoadImage
            className="col-md-12 p-0"
            src={img12}
            placeholder={loading}
            alt="img"
          />
        </div>
        <div className="row">
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img13}
            placeholder={loading}
            alt="img"
          />
          <LazyLoadImage
            className="col-md-6 p-0"
            src={img14}
            placeholder={loading}
            alt="img"
          />
        </div>
      </section>
    </main>
  );
};

export default MeetTheTeam;
