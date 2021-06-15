import hero from "../../images/hero.png";

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
    </main>
  );
};

export default Home;
