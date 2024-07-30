import React, { useEffect, useState } from "react";
import { heroImages } from "../data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Hero = () => {
  const [images, setImages] = useState(heroImages);
  const [currentImg, setCurrentImg] = useState(0);

  const nextSlide = () => {
    setCurrentImg((oldImage) => {
      const result = (oldImage + 1) % images.length;
      return result;
    });
  };
  const prevSlide = () => {
    setCurrentImg((oldImage) => {
      const result = (oldImage - 1 + images.length) % images.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentImg]);
  return (
    <div className="overflow-hidden relative h-[32rem] w-full rounded-b-lg">
      {images.map((image, imageIndex) => (
        <div
          className="absolute w-full bg-black duration-500 "
          key={image.id}
          style={{
            transform: `translateX(${100 * (imageIndex - currentImg)}%)`,
            opacity: imageIndex === currentImg ? "1" : "0",
            visibility: imageIndex === currentImg ? "visible" : "hidden",
            transition : "0.3s ease-in-out all"
          }}
        >
          <img src={image.img} className="h-[30rem] w-full shadow-lg shadow-slate-950 object-cover rounded-b-lg" />
        </div>
      ))}
      <div className="">
        <IoIosArrowBack
          onClick={prevSlide}
          className="text-3xl absolute  mt-60 left-4  text-black cursor-pointer hover:scale-105 hover:text-gray-600"
        />
        <IoIosArrowForward
          onClick={nextSlide}
          className="text-3xl absolute  mt-60 right-4  text-black cursor-pointer hover:scale-105 hover:text-gray-600"
        />
      </div>
    </div>
  );
};

export default Hero;


