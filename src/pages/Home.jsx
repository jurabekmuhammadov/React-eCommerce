import { Fragment } from "react";
import Hero from "./HomeComponents/Hero/Hero";
import Range from "./HomeComponents/Range/Range";
import OurProducts from "./HomeComponents/OurProducts/OurProducts";
import FuniroFurniture from "./HomeComponents/FuniroFurniture.jsx/FuniroFurniture";
// import CarouselSection from "./HomeComponents/Carousel/CarouselSection";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Range />
      <OurProducts />
      {/* <CarouselSection /> */}
      <FuniroFurniture />
    </Fragment>
  );
};

export default Home;
