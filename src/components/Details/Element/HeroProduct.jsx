import { useRef } from "react";
import CarouselHero from "./CarouselHero";

const HeroProduct = ({ product, isLoading }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouse = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = (e.clientY = e.target.offsetTop);

    imageRef.current.style.transformOrigin = `${x}px ${y}px`;
    imageRef.current.style.transform = "scale(2)";
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transformOrigin = "center";
    imageRef.current.style.transform = "scale(1)";
  };

  return (
    <>
      <div className="flex flex-col md:w-7/12 xl:w-6/12 items-center">
        {isLoading === true && (
          <h1 className="text-4xl italic font-semibold text-slate-900 text-opacity-60 my-20">
            Please Wait..
          </h1>
        )}
        <div
          ref={containerRef}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          className="overflow-hidden max-h-[480px] cursor-zoom-in"
        >
          <img
            ref={imageRef}
            src={product.image}
            className={`object-cover w-full h-full origin-center`}
          />
        </div>
        <CarouselHero />
      </div>
    </>
  );
};

export default HeroProduct;
