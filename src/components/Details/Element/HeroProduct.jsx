import CarouselHero from "./CarouselHero";

const HeroProduct = ({ product, isLoading }) => {
  return (
    <>

      <div className="flex flex-col md:w-7/12 xl:w-6/12 items-center">
      {isLoading === true && (
        <h1 className="text-4xl italic font-semibold text-slate-900 text-opacity-60 my-20">Please Wait..</h1>
      )}
        <img
          src={product.image}
          className="bg-cover bg-center max-h-[500px] xl:max-h-[800px] cursor-zoom-in"
        />
        <CarouselHero />
      </div>
    </>
  );
};

export default HeroProduct;
