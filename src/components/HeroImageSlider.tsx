
import { useState, useEffect } from "react";
import q from '../assets/hero.jpg';
import c from '../assets/17.jpg'
import SBlogo from '../assets/SBLogo.jpg';
import SBlogo2 from '../assets/SBLogo2.jpg';

const HeroImageSlider = () => {
  // Array of images
  const images = [
    q,SBlogo2,c,SBlogo
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative">
      {/* Main image */}
      <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
        <img
          src={images[currentIndex]} // Dynamically display the current image
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Optional: Dots to indicate the current image */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroImageSlider;
