import CarouselHero from "./CarouselHero"

const HeroProduct = ({ product }) => {
  return (
    <div className="flex flex-col md:w-7/12 xl:w-6/12 items-center">
    <img
      src={product.img}
      className="bg-cover bg-center max-h-[500px] xl:max-h-[800px] cursor-zoom-in"
    />
    <CarouselHero />
  </div>
  )
}

export default HeroProduct