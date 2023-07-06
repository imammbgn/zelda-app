import { useEffect, useState } from "react";
import ArrowRight from "./Button/ArrowRight";
import ArrowLeft from "./Button/ArrowLeft";
import Article from "./ListArticle/Article";
import Article2 from "./ListArticle/Article2";
import closeIcon from "../../../public/svg/close.svg";

const Carousel = ({ onclick }) => {
  const slides = [
    { src: "/images/img3.jpg", alt: "women with winter jacket" },
    { src: "/images/img2.jpg", alt: "women with tomato t-shirt" },
    { src: "/images/img4.jpg", alt: "women with hat" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [promo, setPromo] = useState(true);

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
    <div className="relative w-full m-auto group mb-4">
      {promo && (
        <div className="flex flex-row w-full h-10 bg-gold justify-center items-center animate-pulse fixed z-10">
          <h1 className="font-semibold text-xs md:text-lg text-center px-12 md:px-0 text-slate-50 tracking-wide cursor-pointer">
            Harga Spesial untuk Kamu! Hemat hingga 70% untuk Semua Pembelian!!
          </h1>
          <div className="flex w-5 h-5 md:w-6 md:h-6 border-[1px] lg:border-[3px] rounded-full justify-center items-center absolute right-3 cursor-pointer">
            <img
              src={closeIcon}
              onClick={() => setPromo(!promo)}
              className="w-3 h-3 md:w-4 md:h-4"
              alt="close-icon"
            />
          </div>
        </div>
      )}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className="w-full h-[200px] md:h-[300px] lg:h-[450px] xl:h-[550px] 2xl:h-[620px] bg-center bg-cover duration-500"
        alt={slides[currentIndex].alt}
      >
        <Article
          index={currentIndex}
          onclick={onclick}
          month="April 2023"
          season="THE WINTER"
        />
        <Article2
          index={currentIndex}
          onclick={onclick}
          month="June 2023"
          season="THE SUMMER"
        />
        <ArrowLeft
          onclick={prevSlide}
          group="group-hover:block"
          variant="carousel"
          display="hidden"
        />
        <ArrowRight
          onclick={nextSlide}
          group="group-hover:block"
          variant="carousel"
          display="hidden"
        />
      </div>
    </div>
  );
};

export default Carousel;
