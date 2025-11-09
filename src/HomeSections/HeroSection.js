import "./HeroSection.css";
import logo from "../logo.svg";

function HeroSection(){

  const goToContactSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="welcome">Welcome</p>
        <h1 className="title">
          Best Learning <br /> Opportunities
        </h1>
        <p className="subtitle">
          Our goal is to make online <br /> education work for everyone
        </p>
        <div className="hero-buttons">
          <button className="btn about">About Us</button>
          <button className="btn contact" onClick={goToContactSection}>Contact Us</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={logo} alt="Student" />
        <div className="bg-shapes"></div>
      </div>
    </section>
  );
};

export default HeroSection;
