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
  const scrollTo = () => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar onclick={scrollTo} />
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
