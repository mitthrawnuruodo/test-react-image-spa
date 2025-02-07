import "./ImageGallery.css"; // Import the styles

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"]; // Public folder

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
      ))}
    </div>
  );
};

export default ImageGallery;