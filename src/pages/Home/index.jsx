import LazyLoadImage from "../../components/LazyLoadImage";
import loading from "./HomeImages/loading.gif"
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
            <LazyLoadImage  className="col-md-3 p-0" src={img1} placeholder={loading} alt="img"/>
            <LazyLoadImage className="col-md-3 p-0" src={img2} placeholder={loading} alt="img"/>
            <LazyLoadImage className="col-md-3 p-0" src={img3} placeholder={loading} alt="img"/>
            <LazyLoadImage className="col-md-3 p-0" src={img4} placeholder={loading} alt="img"/>
        </div> 
        <div className="row">
            <LazyLoadImage className="col-md-6 p-0" src={img5} placeholder={loading} alt="img"/>
            <LazyLoadImage className="col-md-6 p-0" src={img6} placeholder={loading} alt="img"/>
        </div> 
        <div className="row">
            <LazyLoadImage className="col-md-6 p-0" src={img7} placeholder={loading} alt="img"/>
            <LazyLoadImage className="col-md-6 p-0" src={img8} placeholder={loading} alt="img"/>
        </div> 
        <div className="row">
            <LazyLoadImage className="col-md-12 p-0" src={img9} placeholder={loading} alt="img"/>
        </div>
        <div className="row">
            <LazyLoadImage className="col-md-6 p-0" src={img10} placeholder={loading} alt="img"/>
            <LazyLoadImage className="col-md-6 p-0" src={img11} placeholder={loading} alt="img"/>
        </div> 
        <div className="row">
            <LazyLoadImage className="col-md-12 p-0" src={img12} placeholder={loading} alt="img"/>
        </div>
        <div className="row">
            <LazyLoadImage className="col-md-6 p-0" src={img13} placeholder={loading} alt="img"/>
            <LazyLoadImage className="col-md-6 p-0" src={img14} placeholder={loading} alt="img"/>
        </div> 
      </section>
    </main>
  );
};

export default Home;
