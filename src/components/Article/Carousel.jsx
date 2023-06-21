import { useEffect, useState } from "react";
import ArrowRight from "./Button/ArrowRight";
import ArrowLeft from "./Button/ArrowLeft";
import Article from "./ListArticle/Article";
import Article2 from "./ListArticle/Article2";

const Carousel = () => {
  const slides = [
    { src: "/images/img3.jpg", alt: "women with winter jacket" },
    { src: "/images/img2.jpg", alt: "women with tomato t-shirt" },
    { src: "/images/img4.jpg", alt: "women with hat" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const LastSide = currentIndex === slides.length - 1;
      const newIndex = LastSide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    const FirstSlide = currentIndex === 0;
    const newIndex = FirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const LastSide = currentIndex === slides.length - 1;
    const newIndex = LastSide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full m-auto group mb-10">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className="w-full h-[200px] md:h-[300px] lg:h-[450px] xl:h-[550px] 2xl:h-[620px] bg-center bg-cover duration-500"
        alt={slides[currentIndex].alt}
      >
        <Article index={currentIndex} month="May 2023" season="THE WINTER"/>
        <Article2 index={currentIndex} month="July 2023" season="THE SUMMER"/>
      <ArrowLeft onclick={prevSlide} group="group-hover:block" />
      <ArrowRight onclick={nextSlide} group="group-hover:block" />
      </div>
    </div>
  );
};

export default Carousel;
