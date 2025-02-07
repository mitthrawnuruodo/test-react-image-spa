import Hero from "../components/Hero";
import heroImage from "../assets/hero.jpg"; // Import the hero image
import ImageGallery from "../components/ImageGallery";

const Home = () => {
  return (
    <div>
      <Hero image={heroImage} title="Explore Amazing Images" />
      <h2>Image Gallery</h2>
      <ImageGallery />
    </div>
  );
};

export default Home;