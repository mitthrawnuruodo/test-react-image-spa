import "./Hero.css"; // Import the CSS file

const Hero = ({ image, title = "Welcome to React Image SPA" }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Hero;