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
          <div className="flex items-center my-[15px] min-h-[1px] min-w-[70vw]  bg-gradient-to-r from-[hsla(0,0%,100%,.05)] via-white to-[hsla(0,0%,88%,.05)]">
            {/* Your content here */}
          </div>
        </div>
      </div>
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={prevImage}
      >
        <div className="flex items-center justify-center box-border bg-black/50 border border-[#e0e0e0] rounded-full w-[50px] h-[50px] min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]">
          <FaChevronLeft className="text-white  text-2xl" />
        </div>
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={nextImage}
      >
        <div className="flex items-center justify-center box-border bg-black/50 border border-[#e0e0e0] rounded-full w-[50px] h-[50px] min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]">
          <FaChevronRight className="text-white  text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
