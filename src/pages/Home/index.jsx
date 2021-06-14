import hero from "../../images/hero.png";
import img1 from "./HomeImages/1.jpeg";
import img2 from "./HomeImages/2.jpeg";
import img3 from "./HomeImages/3.jpeg";
import img4 from "./HomeImages/4.jpeg";
import img5 from "./HomeImages/5.jpeg";
import img6 from "./HomeImages/6.jpeg";
import img7 from "./HomeImages/7.jpeg";
import img8 from "./HomeImages/8.jpeg";
import img9 from "./HomeImages/9.jpeg";
import img10 from "./HomeImages/10.jpeg";
import img11 from "./HomeImages/11.jpeg";
import img12 from "./HomeImages/12.jpeg";
import img13 from "./HomeImages/13.jpeg";
import img14 from "./HomeImages/14.jpeg";
const Home = () => {
  return (
    <main className="home-body">
      <div>
        <img
          className="hero animate__animated animate__fadeInDownBig"
          src={hero}
          alt="hero"
        />
      </div>
      <section className="container p-0 home-imgs">
        <div className="row">
            <img className="col-md-3 p-0" src={img1} alt="img" />
            <img className="col-md-3 p-0" src={img2} alt="img" />
            <img className="col-md-3 p-0" src={img3} alt="img" />
            <img className="col-md-3 p-0" src={img4} alt="img" />
        </div> 
        <div className="row">
            <img className="col-md-6 p-0" src={img5} alt="img" />
            <img className="col-md-6 p-0" src={img6} alt="img" />
        </div> 
        <div className="row">
            <img className="col-md-6 p-0" src={img7} alt="img" />
            <img className="col-md-6 p-0" src={img8} alt="img" />
        </div> 
        <div className="row">
            <img className="col-md-12 p-0" src={img9} alt="img" />
        </div>
        <div className="row">
            <img className="col-md-6 p-0" src={img10} alt="img" />
            <img className="col-md-6 p-0" src={img11} alt="img" />
        </div> 
        <div className="row">
            <img className="col-md-12 p-0" src={img12} alt="img" />
        </div>
        <div className="row">
            <img className="col-md-6 p-0" src={img13} alt="img" />
            <img className="col-md-6 p-0" src={img14} alt="img" />
        </div> 
      </section>
    </main>
  );
};

export default Home;
