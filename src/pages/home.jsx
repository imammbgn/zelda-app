import Card from "../components/Cards/Card";
import ListIndex from "../components/CategoriesCards/ListIndex";
import ContainerList from "../components/ListItem/ContainerList";
import Carousel from "../components/Article/Carousel";
import Navbar from "../components/Navbar/Navbar";
import { useRef } from "react";
import Footer from "../components/Footer/Footer";
import BannerFooter from "../components/Banner/BannerFooter";

const Home = () => {
  const containerRef = useRef(null)
  function scrollToTargetAdjusted(){
    const element = containerRef.current
    const headerOffset = 110;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}
  return (
    <>
      <Navbar onclick={scrollToTargetAdjusted}/>
      <Carousel />
      <Card />
      <ListIndex />
      <ContainerList scroll={containerRef}/>
      <BannerFooter />
      <Footer />
    </>
  );
};

export default Home;
