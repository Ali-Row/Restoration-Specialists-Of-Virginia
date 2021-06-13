import hero from "../../images/hero.png"
const Home = () => {
  return (
    <div>
        <img className="hero" src={hero} alt="hero"/>

        <div className="text-center">
          <i class="fas fa-angle-down"></i>
        </div>

    </div>
  );
};

export default Home;
