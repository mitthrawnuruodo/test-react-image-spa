// import React from "react";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import heroImage from "../assets/hero.jpg"; // Import the hero image


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