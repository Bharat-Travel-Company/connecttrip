import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(images);
  return (
    <div className="relative w-full md:h-[calc(100vh-8rem)] h-[380px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={images[currentIndex]}
          alt="Carousel"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center bg-black bg-opacity-40">
          
        </div>
      </div>
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={prevImage}
      >
        <FaChevronLeft className="text-white lg:text-4xl text-2xl" />
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={nextImage}
      >
        <FaChevronRight className="text-white lg:text-4xl text-2xl" />
      </div>
    </div>
  );
};

export default Carousel;
